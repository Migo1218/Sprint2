import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url1 } from '../helpers/url';
import {  Descripciontarjeta, Imagenguajolota, Precio, Tarjetasestilo } from '../styles/template';

export  function Bebidas() {

    const [bebidas, setBebidas] = useState([])

    useEffect(() => {
        obtenderDatos()
    }, [])

    const obtenderDatos = () => {
        axios.get(url1)
          .then((resp) => {
              console.log(resp)
              setBebidas(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div>
      <div>
        {bebidas.map((dat) => (
          <Tarjetasestilo key={dat.id}>
            <Imagenguajolota src={dat.imagen} alt="verde" />
            <Descripciontarjeta>
            <p>{dat.nombre}</p>
            <Precio>{dat.precio}</Precio>
            </Descripciontarjeta>
            
          </Tarjetasestilo>
        ))}
      </div>
    </div>
    )
}
