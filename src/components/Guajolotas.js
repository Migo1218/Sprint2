import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import {
  Descripciontarjeta,
  Imagenguajolota,
  Precio,
  Tarjetasestilo,
} from "../styles/template";

export function Guajolotas() {
  const [guajolotas, setGuajolotas] = useState([]);

  useEffect(() => {
    obtenderDatos();
  }, []);

  const obtenderDatos = () => {
    axios
      .get(url)
      .then((resp) => {
        setGuajolotas(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const detallesguajolota = (e) => {
    if(e.target.matches(".miguel")){
      console.log(e.target)
    };
  };

  return (
    <div>
      <div>
        {guajolotas.map((dat) => (
          <Tarjetasestilo key={dat.id}>
            <div onClick={detallesguajolota} className="miguel">
              <Imagenguajolota src={dat.imagen} alt="verde" />
              <Descripciontarjeta>
                <p>{dat.nombre}</p>
                <Precio>{dat.precio}</Precio>
              </Descripciontarjeta>
            </div>
          </Tarjetasestilo>
        ))}
      </div>
    </div>
  );
}
