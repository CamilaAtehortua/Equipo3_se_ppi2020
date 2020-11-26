import React from "react";
import {Link} from "react-router-dom";
function D_Registrar_como() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
         
        <h1 className="adm">
            <b> Registrarse como: </b>{" "}
          </h1>
          <button className="visitante">
            <b> <Link to="/Registrarse">Visitante </Link> </b>{" "}
          </button>
          <button className="administrador">
            <b> 
              <Link to="/RegistrarseA">Administrador </Link>
            </b>{" "}
          </button>

          <button className="cerrar2">
          <Link to="/">Atrás </Link>
          </button>
         
        </div>
      </div>

      <div class="col-md-3"></div>
    </>
  );
}

export default D_Registrar_como;