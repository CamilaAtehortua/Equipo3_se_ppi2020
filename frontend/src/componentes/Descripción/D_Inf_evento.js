import React from "react";

function D_Inf_evento() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 className="Eve1">
            <b> Día de los Sancochos. </b>{" "}
          </h1>
          <h3 className="Deven">
            <b> Descripción del evento.</b>{" "}
          </h3>
          <p className="Teve1">
            El dia de los sancochos es un día donde los habitantes del
            corregimiento de Santa elena participan en una competencia donde
            califican quién venda más platos de sancocho, comprados por los
            turistas y habitantes.{" "}
          </p>
          <h3 className="Deven">
            <b>Fecha.</b>{" "}
          </h3>
          <p className="Teve1"> 19 de Julio </p>
          <h3 className="Deven">
            <b>Lugar.</b>{" "}
          </h3>
          <p className="Teve1">Parque central de Santa Elena.</p>
          <h3 className="Deven">
            <b>Hora.</b>{" "}
          </h3>
          <p className="Teve1">11:30 am</p>

          <form>
            <h3 className="Deven">
              {" "}
              <b>Asistencia:</b>{" "}
            </h3>
            <p className="Teve1">
              <input type="radio" name="estacion" value="primavera" /> Asistiré{" "}
            </p>
            <p className="Teve1">
              <input type="radio" name="estacion" value="verano" /> Tal vez
              Asista{" "}
            </p>
            <p className="Teve1">
              <input type="radio" name="estacion" value="otoño" /> No Asistiré{" "}
            </p>
          </form>

          <button className="botrosev"> Mirar otros eventos</button>
          <button>Aceptar</button>
        </div>
        <div class="col-md-3"></div>
      </div>
    </>
  );
}

export default D_Inf_evento;
