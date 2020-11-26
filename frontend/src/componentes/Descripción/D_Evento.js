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
          <Link to="/Inf_evento"> Día de los Sancochos </Link>
           
          </a>
          <button className="cerrar1">
          <Link to="/Pagina_inicial"> Cerrar sesión </Link>
          </button>
        </div>
      </div>

      <div class="col-md-3"></div>
    </>
  );
}

export default D_Evento;
