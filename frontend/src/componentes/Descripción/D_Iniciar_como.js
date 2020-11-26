import React from "react";
import {Link} from "react-router-dom";
function D_Iniciar_como() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
         
        <h1 className="adm">
            <b> Iniciar sesión como: </b>{" "}
          </h1>
          <button className="visitante">
            <b> <Link to="/Iniciar_sesion">Visitante </Link> </b>{" "}
          </button>
          <button className="administrador">
            <b> 
              <Link to="/Iniciar_sesionA">Administrador </Link>
            </b>{" "}
          </button>

          <button className="cerrar2">
          <Link to="/Pagina_inicial">Atrás </Link>
          </button>


        </div>
      </div>

      <div class="col-md-3"></div>
    </>
  );
}

export default D_Iniciar_como;