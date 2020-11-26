import React from "react";
import {Link} from "react-router-dom";
function D_pagina_iniciar() {
  return (
    <>
<div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
    
      <div>
      <button className="InicioSesion">
          <Link to="/Iniciar_como"> Iniciar Sesion</Link>
          </button>
      </div>
        
        <div>
          <button className="Registrar">
          <Link to="/Registrar_como"> Registrarse </Link>
          </button>
         </div>

         </div>
         <div class="col-md-3"></div>
         </div>
   
    </>
  );
}

export default D_pagina_iniciar;


