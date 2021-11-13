import styled, { createGlobalStyle } from "styled-components";

export const Logotemplate = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export const Carritotemplate = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;

`;

export const Fondopantalla = styled.body`
 background-color: #D3C3ED;
` 

export const Bannerstyle = styled.h4`
text-align: center;
font-size: 25px;
margin-top: 30px;
`

export const Navstyle = styled.nav`
.header{
    text-align: center;
    color: rgb(173, 69, 69);
    padding: 0.3%;
    font-size: 120%;
}

.header nav{
    display: inline-block;
    justify-content: center;
    padding-left:10%;
    padding-right:10%; 
}

.link{
    text-decoration: none;
    letter-spacing: 5px;
    padding-right:10%; 
}


.link:hover{
    color: tomato;
}
`

export const Guajolotastyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 312px;
height: 592px;
left: 24px;
top: 431px;
`

export const Busquedastyle = styled.input`
 background-color: white;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`
export const Botonbuscar = styled.button`
 background-color: white;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`

export const Formulariostyle = styled.form`
   padding: 20px;
`

export const Imagenguajolota = styled.img`
    width: 50px;
  height: 50px;
`

export const Precio = styled.p`
color:tomato;
`

export const Tarjetasestilo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

position: static;
width: 312px;
height: 112px;
left: 0px;
top: 480px;

background: #FFFFFF;
/* shadow-1 */

box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;

/* Inside Auto Layout */

flex: none;
order: 4;
flex-grow: 0;
margin: 8px 0px;
`

export const Descripciontarjeta = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;

position: static;
width: 184px;
height: 46px;
left: 112px;
top: 33px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
margin: 0px 16px;
`