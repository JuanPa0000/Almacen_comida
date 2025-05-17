import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
     
     <form className="form" action="./procesar.py" method="post">
        <label htmlFor="product">Nombre:</label>
        <input className="form-product" type="text" name="product" id="product" required />
        <label htmlFor="description">Descripción:</label>
        <textarea name="description" id="description" className="form-description" required></textarea>
        <label htmlFor="category">Categoría:</label>
        <select className="form-category" name="category" id="category" required>
          <option value="">--- ELIGE UNA ---</option>
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
        <input className="form-size" name="size" id="size" required type="number" defaultValue={0}/>
        <label htmlFor="stock">Cantidad:</label>
        <input name="stock" className="form-stock" id="stock" type="number" required defaultValue={0}/>
        <label htmlFor="price">Precio:</label>
        <input className="form-price" name="price" id="price" type="number" required defaultValue={0}/>  

        <div className='form-buttons'>
          <button className='form-buttons-saveButton' type='submit'>Guardar</button>
          <button className='form-buttons-deleteButton'>Eliminar</button>
          <button className='form-buttons-propierityButton'>Propiedades</button>
        </div>
      </form>

  </div>

  )
}