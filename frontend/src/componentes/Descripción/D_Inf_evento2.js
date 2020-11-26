import React from "react";
import {Link} from "react-router-dom";
function D_Inf_evento2() {
  return (
    <>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 className="Eve1">
            <b> Desfile de Silleteritos. </b>{" "}
          </h1>
          <h3 className="Deven">
            <b> Descripción del evento.</b>{" "}
          </h3>
          <p className="Teve1">
            Desfile donde los niños y niñas de Santa Elena
            cargan sus hermosas y coloridas silletas, desde el estadero
            "El silletero" hasta el parque central.{" "}
          </p>
          <h3 className="Deven">
            <b>Fecha.</b>{" "}
          </h3>
          <p className="Teve1"> 27 de Julio </p>
          <h3 className="Deven">
            <b>Lugar.</b>{" "}
          </h3>
          <p className="Teve1">Estadero el silletero.</p>
          <h3 className="Deven">
            <b>Hora.</b>{" "}
          </h3>
          <p className="Teve1">09:30 am</p>

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

          <button className="botrosev">
          <Link to="/Evento">Mirar otros eventos </Link>
          </button>
          <div>
          <button className="botrosev" ><Link to="/Evento">Aceptar </Link></button>
         
         
        </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </>
  );
}

export default D_Inf_evento2;
