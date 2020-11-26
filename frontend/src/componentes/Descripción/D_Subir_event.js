import React from "react";
import {Link} from "react-router-dom";
function D_Subir_event() {
  return (
<>
<div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1" className="añadire"><b>Añadir nombre del evento</b></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
  </input>

  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1" className="añadire"><b>Añadir lugar</b></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
  </input>
  
  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1" className="añadire"><b>Añadir hora</b></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
  </input>

  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1" className="añadire"><b>Descripción del evento</b></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
  </input>
  
  <form>
            <h3 className="añadire">
              {" "}
              <b>Asistencia:</b>{" "}
            </h3>
            <p className="añadire">
              <input type="radio" name="estacion" value="primavera" /> Asistiré{" "}
            </p>
            <p className="añadire">
              <input type="radio" name="estacion" value="verano" /> Tal vez
              Asista{" "}
            </p>
            <p className="añadire">
              <input type="radio" name="estacion" value="otoño" /> No Asistiré{" "}
            </p>
          </form>

          <button className="batras3">
          <Link to="/Eventos_adm">Atrás </Link>
          </button>
          
          <button className="subir">
          <Link to="/Eventos_adm">subir</Link>
          </button>
        
  
</div>
</form>
</div>
</form>
</div>
</form>
</div>
</form>
</div>
</div>
<div class="col-md-3"></div>
</>
  );
}

export default D_Subir_event;
