import React from "react";
import {Link} from "react-router-dom";
function D_Seccion_adm() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 className="adm">
            <b> SESIÓN DE ADMINISTRADOR </b>{" "}
          </h1>
          <button className="beventos">
            <b> <Link to="/Eventos_adm">Eventos </Link> </b>{" "}
          </button>
          <button className="pmatriculadas">
            <b> 
              <Link to="/Pr_matr">Personas matriculadas </Link>
            </b>{" "}
          </button>

          <button className="cerrar2">
          <Link to="/Pagina_inicial">Cerrar sesión </Link>
          </button>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default D_Seccion_adm;
