import React from "react";
import Pagina_inicial from "../Imagenes/Logo.png";
function E_Pagina_inicial() {
  return (
    <>
    
      <div className="Logo">
        <img src={Pagina_inicial} class="rounded mx-auto d-block" width="350" alt="Logo" />
      </div>
      

    </>
  );
}

export default E_Pagina_inicial;
