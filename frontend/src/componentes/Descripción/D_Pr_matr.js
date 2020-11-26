import React from "react";
import {Link} from "react-router-dom";
function D_Pr_matr() {
  return (
<>
<div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
<h1 className="prm">Personas Matriculadas</h1>
<div>
<div class="btn-group" className="seleccionar">
  <button type="button" class="btn btn-default dropdown-toggle"
          data-toggle="dropdown">
    Seleccionar evento <span class="caret"></span>
  </button>

  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Día de los sancochos</a></li>
   
  </ul>
  </div>
<div>
<ul class="list-group" className="lista">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Asistiré
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Tal vez Asista
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  No Asistiré
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
<button className="batras2">
<Link to="/Seccion_adm">Atrás </Link>
</button>
</div>

</div>
</div>
</div>
<div class="col-md-3"></div>
</>
  );
}
export default D_Pr_matr;