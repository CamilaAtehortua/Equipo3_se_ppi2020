import React from "react";
import Encabezado from "../componentes/Encabezado/E_Evento";
import Descripcion from "../componentes/Descripción/D_Evento";
import "../styles.css";

function Evento() {
  return (
    <>
      <Encabezado />
      <Descripcion />
    </>
  );
}
export default Evento;