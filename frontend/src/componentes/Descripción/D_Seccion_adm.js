import React from "react";

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
            <b> Eventos </b>{" "}
          </button>
          <button className="pmatriculadas">
            <b> Personas matriculadas </b>{" "}
          </button>

          <button className="cerrar2">cerrar sesión</button>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default D_Seccion_adm;
