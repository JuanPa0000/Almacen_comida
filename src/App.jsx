import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
     
      <form className='form' action={'./procesar.py'} method='post'>
        <div>
          <label for='product'>Nombre:</label>
          <input className='form-product' type='text' name='product' required></input>

          <label for='description'>Descripción:</label>
          <textarea name='description' className='form-description' required></textarea>

          <label>Categoría:</label>
          <select className='form-category' name='category' required>
            <option value={''}>-- ELIGE UNA --</option>
            <option value={'vegetales'}>Vegetales</option>
            <option value={'frutas'}>Frutas</option>
            <option value={'carnes'}>Carnes</option>
            <option value={'pescados'}>Pescados y Mariscos</option>
            <option value={'lacteos'}>Lácteos</option>
            <option value={'cereales'}>Cereales</option>
            <option value={'panaderia'}>Panaderia</option>
            <option value={'bebidas'}>Bebidas</option>
            <option value={'dulces'}>Dulces</option>
            <option value={'huevos'}>Huevos</option>
          </select>
        </div>
        <div>
          <label for='size'>Peso:</label>
          <input className='form-size' name='size' required type='number'></input>

          <label for='stock'>Cantidad:</label>
          <input name='stock' className='form-stock' type='number' required></input>

          <label for='price'>Precio:</label>
          <input className='form-price' name='price' type='number' required></input>
        </div>
      </form>
    
    </div>
  )
}