import React from 'react'
import { Botonbuscar, Busquedastyle, Formulariostyle } from '../styles/template'

export default function Busqueda() {
    return (
        <div>
            <Formulariostyle>
                <Busquedastyle type="text" placeholder="Buscar"></Busquedastyle>
                <Botonbuscar type="button">Buscar</Botonbuscar>
            </Formulariostyle>
        </div>
    )
}
