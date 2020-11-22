import React from "react";
import Encabezado from "../componentes/Encabezado/E_Seccion_adm";
import Descripcion from "../componentes/Descripción/D_Seccion_adm";
import "../styles.css";

function Seccion_adm() {
  return (
    <>
      <Encabezado />
      <Descripcion />
    </>
  );
}
export default Seccion_adm;