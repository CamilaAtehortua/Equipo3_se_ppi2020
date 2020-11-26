import React from "react";
import {Link} from "react-router-dom";
function D_Evento() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 className="Tevento">Eventos Disponibles</h1>
          <a class="boton1" href="#">
          <Link to="/Inf_evento1"> Día de los Sancochos </Link>
           </a>
           <div>
           <a class="boton1" href="#">
          <Link to="/Inf_evento2"> Desfile de Silleteritos </Link>
          </a>
          </div>
          <button className="cerrar1">
          <Link to="/"> Cerrar sesión </Link>
          </button>
        </div>
      </div>

      <div class="col-md-3"></div>
    </>
  );
}

export default D_Evento;
