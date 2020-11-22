import React from "react";
import Encabezado from "../componentes/Encabezado/E_Inf_evento";
import Descripcion from "../componentes/Descripción/D_Inf_evento";
import "../styles.css";

function Inf_evento() {
  return (
    <>
      <Encabezado />
      <Descripcion />
    </>
  );
}
export default Inf_evento;