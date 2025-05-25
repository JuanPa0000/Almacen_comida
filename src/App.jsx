import React from 'react';
import { useState } from 'react';
import ProductCard  from './components/ProductCard';
import DetailsCard  from './components/DetailsCard';
import AddMoreCard from './components/AddMoreCard';
import './App.css';

export default function App() {
  //Variable estado de la product card
  const [products, setProduct] = useState([]);
  //Variable estado de los botones de la product card
  const [productCardButtons,setProductCardButtons] = useState()

  //Funcion de añadir productos
  function addProduct(event){
    event.preventDefault();
    const form=event.target;
    
    const newProduct={
      product: form.product.value,
      description: form.description.value,
      category: form.category.selectedIndex,
      size: form.size.value,
      stock: form.stock.value,
      price: form.price.value
    };
    setProduct([...products,newProduct]);
    form.reset();
  }

  //Funcion de añadir mas productos -> Product Card Button
  function addMoreProducts(extraProducts,index){
    //Asignar la nueva lista de productos
    let newProductList=[];
    for(let i=0;i<products.length;i++){
      //Si los indices no coinciden lo agrega normal a la lista
      if (i!=index){
        newProductList.push(products[i]);
      //Si los indices coinciden le suma las nuevas variables
      } else {
        //Asignar un nuevo objeto con las priopedades anteriores y las nuevas sumadas
        let newProduct={
          product: products[i].product,
          description: products[i].description,
          category: products[i].category,
          size: parseInt(products[i].size)+parseInt(extraProducts.size),
          stock: parseInt(products[i].stock)+parseInt(extraProducts.stock),
          price: parseInt(products[i].price)+parseInt(extraProducts.price)
        }
        //Agregar la variable newProduct a la lista
        newProductList.push(newProduct);
      }
      //Actualizar useState 
      setProduct(newProductList);
    }
  }
  //Funcion de eliminar producto -> Product Card Button
  function deleteProduct(index){
    let newProductList=[];
    for (let i=0; i<products.length; i++){
      if (i!=index){
        newProductList.push(products[i]);
      }
    }
    setProduct(newProductList);
    setProductCardButtons();
  }
  //Funcion de activar detalles del product -> Product Card Button
  function activeProductDetails(product,description,stock,category,size,price){
    setProductCardButtons(<DetailsCard productName={product} description={description} stock={stock} category={category} size={size} price={price} closeProductDetails={closeProductDetails}></DetailsCard>);
  } //Cerrar product details card
  function closeProductDetails(){
    setProductCardButtons();
  }

  //Función de cerrar card añadir productos extra -> Product Card Button
  function closeAddMoreCard(){
      setProductCardButtons();
  } // Botom de añadir producto extra
  function onAddButton(index){
    setProductCardButtons(<AddMoreCard 
        closeAddMoreCard={closeAddMoreCard}
        addMoreProducts={addMoreProducts}
        index={index}
        ></AddMoreCard>);
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
          key={index}
          index={index}
          product={product} 
          deleteProduct={() => deleteProduct(index)} 
          activeProductDetails={activeProductDetails}
          addMoreProducts={addMoreProducts} 
          onAddButton={onAddButton}
          ></ProductCard>
        ))}
      </div>
      {productCardButtons}
  </div>

  )
}