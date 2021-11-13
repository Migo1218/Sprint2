import carrito from '../images/carrito.png'


import React from 'react'
import { Carritotemplate } from '../styles/template'



export default function LogoCarrito() {
    return (
        <div>
            <Carritotemplate src={carrito} alt="carrito"/>
        </div>
    )
}
