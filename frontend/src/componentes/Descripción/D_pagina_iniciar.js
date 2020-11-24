import React from "react";
import {link} from "react-router-dom";
function D_pagina_iniciar() {
  return (
    <>
      <div className="Titulo">
        <div class="row">
          <div class="col-md-3"> </div>
          <div class="col-md-3 col-sm-8">
            <div class="panel panel-default">
              {" "}
              <div class="InicioSesion">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Iniciar Sesión
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  </a>
                  <a class="dropdown-item" href="#"> 
                  </a>
                </div>
              </div>
              <div class="Registrar">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Registrate
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                  <link to="/Registrarse">Visitante </link>
                  </a>
                  <a class="dropdown-item" href="#">
                  <link to="/RegistrarseA">Administrador </link>
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </>
  );
}

export default D_pagina_iniciar;
