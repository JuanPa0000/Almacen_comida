import React from 'react';
import { useState } from 'react';
import ProductCard  from './components/ProductCard';
import './App.css';

export default function App() {
  const [products, setProduct] = useState([]);

  function addProduct(event){
    event.preventDefault();
    const form=event.target;
    
    const newProduct={
      product: form.product.value,
      description: form.description.value,
      category: form.category.index,
      size: form.size.value,
      stock: form.stock.value,
      price: form.price.value
    };
    console.log(form);
    setProduct([...products,newProduct]);
    form.reset();
  }

  return (
    <div style={{width: '80rem'}}>

     <form className="form" onSubmit={addProduct} id='form'>
        <label htmlFor="product">Nombre:</label>
        <input className="form-product" type="text" name="product" id="product" required/>
        <label htmlFor="description">Descripción:</label>
        <textarea name="description" id="description" className="form-description" required></textarea>
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
        <input className="form-size" name="size" id="size" required type="number" placeholder='0.0Kg'/>
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
          <ProductCard key={index} product={product} ></ProductCard>
        ))}
      </div>

  </div>

  )
}