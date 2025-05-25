import React, { useState, useEffect } from 'react';
import ProductCard  from './components/ProductCard';
import DetailsCard  from './components/DetailsCard';
import AddMoreCard from './components/AddMoreCard';
import './App.css';
import { collection, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from './firebase';

export default function App() {
  const [products, setProduct] = useState([]);
  const [productCardButtons,setProductCardButtons] = useState();

  // Cargar productos guardados en Firestore al iniciar la app
  useEffect(() => {
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      // Cargamos los productos incluyendo el id para luego sincronizar bien
      const loadedProducts = querySnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setProduct(loadedProducts);
    }
    fetchProducts();
  }, []);

  // Cada vez que 'products' cambie, sincronizamos Firestore: borramos todo y añadimos productos nuevos
  useEffect(() => {
    async function resetProductsInDb() {
      try {
        // 1. Leer todos los documentos actuales de la colección
        const querySnapshot = await getDocs(collection(db, "products"));
        // 2. Borrar cada documento existente
        const deletePromises = querySnapshot.docs.map(docSnap => deleteDoc(doc(db, "products", docSnap.id)));
        await Promise.all(deletePromises);

        // 3. Subir todos los productos nuevos con id único (usar el índice o el id actual)
        const addPromises = products.map((product, index) => {
          // Para evitar guardar el campo 'id' dentro del documento en Firestore
          const { id, ...productData } = product;
          // Id nuevo o reutilizar el id para mantener consistencia
          const docId = id || `product_${index}`;
          return setDoc(doc(db, "products", docId), productData);
        });
        await Promise.all(addPromises);

        console.log("Base de datos reseteada con los nuevos productos");

      } catch (error) {
        console.error("Error reseteando la base de datos:", error);
      }
    }

    if (products.length > 0) {
      resetProductsInDb();
    }
  }, [products]);

  // Función para añadir producto nuevo desde el formulario
  function addProduct(event){
    event.preventDefault();
    const form = event.target;
    
    const newProduct = {
      product: form.product.value,
      description: form.description.value,
      category: form.category.selectedIndex,
      size: form.size.value,
      stock: form.stock.value,
      price: form.price.value
    };

    setProduct([...products, newProduct]);
    form.reset();
  }

  // Función para añadir más productos a uno existente (actualiza size, stock, price)
  function addMoreProducts(extraProducts, index) {
    let newProductList = [];
    for(let i = 0; i < products.length; i++) {
      if (i !== index) {
        newProductList.push(products[i]);
      } else {
        let newProduct = {
          ...products[i],
          size: parseFloat(products[i].size) + parseFloat(extraProducts.size),
          stock: parseInt(products[i].stock) + parseInt(extraProducts.stock),
          price: parseFloat(products[i].price) + parseFloat(extraProducts.price)
        };
        newProductList.push(newProduct);
      }
    }
    setProduct(newProductList);
  }

  // Función para eliminar producto
  function deleteProduct(index) {
    let newProductList = products.filter((_, i) => i !== index);
    setProduct(newProductList);
    setProductCardButtons();
  }

  // Función para activar detalles de producto
  function activeProductDetails(product, description, stock, category, size, price) {
    setProductCardButtons(
      <DetailsCard 
        productName={product} 
        description={description} 
        stock={stock} 
        category={category} 
        size={size} 
        price={price} 
        closeProductDetails={closeProductDetails} 
      />
    );
  }

  // Cerrar detalles producto
  function closeProductDetails(){
    setProductCardButtons();
  }

  // Cerrar card añadir productos extra
  function closeAddMoreCard(){
    setProductCardButtons();
  }

  // Botón para abrir card de añadir producto extra
  function onAddButton(index){
    setProductCardButtons(
      <AddMoreCard 
        closeAddMoreCard={closeAddMoreCard}
        addMoreProducts={addMoreProducts}
        index={index}
      />
    );
  }

  return (
    <div style={{width: '80rem'}}>

      <form className="form" onSubmit={addProduct} id='form'>
        <label htmlFor="product">Nombre:</label>
        <input className="form-product" type="text" name="product" id="product" required/>
        <label htmlFor="description">Descripción:</label>
        <textarea name="description" id="description" className="form-description"></textarea>
        <label htmlFor="category">Categoría:</label>
        <select className="form-category" name="category" id="category" required>
          <option value=""></option>
          <option value="vegetales">Vegetales</option>
          <option value="frutas">Frutas</option>
          <option value="carnes">Carnes</option>
          <option value="pescados">Pescados y Mariscos</option>
          <option value="lacteos">Lácteos</option>
          <option value="cereales">Cereales</option>
          <option value="panaderia">Panadería</option>
          <option value="bebidas">Bebidas</option>
          <option value="dulces">Dulces</option>
          <option value="huevos">Huevos</option>
        </select>
        <label htmlFor="size">Peso:</label>
        <input className="form-size" name="size" id="size" type="number" placeholder='0.0Kg'/>
        <label htmlFor="stock">Cantidad:</label>
        <input name="stock" className="form-stock" id="stock" type="number" required placeholder='0'/>
        <label htmlFor="price">Precio:</label>
        <input className="form-price" placeholder="€0.00" name="price" id="price" type="number" required/>  
      </form>

      <div className='buttons'>
        <button className='buttons-addButton' form='form' type='submit'>Añadir</button>
        <button className='buttons-removeButton'>Eliminar</button>
        <button className='buttons-editButton'>Editar</button>
      </div>

      <h1 className='productListTitle'>Productos Almacenados</h1>
      <div className='productList'>
        {products.map((product,index) => (
          <ProductCard 
            key={product.id || index} 
            index={index}
            product={product} 
            deleteProduct={() => deleteProduct(index)} 
            activeProductDetails={activeProductDetails}
            addMoreProducts={addMoreProducts} 
            onAddButton={onAddButton}
          />
        ))}
      </div>

      {productCardButtons}
    </div>
  );
}
