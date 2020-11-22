import React from "react";

function D_Eventos_adm() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 className="Sadm">
            <b>SESIÓN DE ADMINISTRADOR</b>{" "}
          </h1>
          <h2 className="eveadm"> Eventos</h2>
          <button className="beveadm"> Día de los Sanchochos </button>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
            >
              Opciones <span class="caret"></span>
            </button>

            <ul class="dropdown-menu" role="menu">
              <li>
                <a href="#">Eliminar</a>
              </li>
              <li>
                <a href="#">Editar</a>
              </li>
              <li class="divider"></li>
            </ul>
          </div>
          <div>
            <button className="bañadir">+Añadir Evento</button>
          </div>
          <div>
            <button className="batras">Atrás</button>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </>
  );
}

export default D_Eventos_adm;
