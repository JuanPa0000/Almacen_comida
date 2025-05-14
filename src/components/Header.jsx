import React from 'react'

export default function Header(){
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src='../../public/logo.png'></img>
            </div>
            <ul className='header-list'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Productos</a></li>
                <li><a href=''>Nosotros</a></li>
                <li><a href=''>Contacto</a></li>
                <li><a href=''>Cart</a></li>
            </ul>
        </div>
    )
}