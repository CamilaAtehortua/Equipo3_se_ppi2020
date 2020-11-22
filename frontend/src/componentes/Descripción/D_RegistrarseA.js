import React from "react";

function D_RegistrarseA() {
  return (
    <div>
      <div class="row">
        <div class="col-md-3"> </div>
        <div class="col-md-3 col-sm-8">
          <h1 class="Registrate">Registrate</h1>

          <div class="Nombre">
            <label for="exampleInputEmail1">Nombre</label>
            <input
              type="Nombre"
              class="form-control"
              id="exampleInputNombre1"
              aria-describedby="NombreHelp"
            ></input>
            <small id="NombreHelp" class="form-text text-muted"></small>

            <div class="Apellido">
              <label for="exampleInputApellido1">Apellido</label>
              <input
                type="Apellido"
                class="form-control"
                id="exampleInputApellido1"
                aria-describedby="ApellidoHelp"
              ></input>
              <small id="ApellidoHelp" class="form-text text-muted"></small>

              <div class="Fechadenacimiento">
                <label for="exampleInputFechadenacimiento1">
                  Fecha de nacimiento
                </label>
                <input
                  type="Fechadenacimiento"
                  class="form-control"
                  id="exampleInputFechadenacimiento1"
                  aria-describedby="FechadenacimientoHelp"
                ></input>
                <small
                  id="FechadenacimientoHelp"
                  class="form-text text-muted"
                ></small>

                <div class="Correo">
                  <label for="exampleInputEmail1">Correo</label>
                  <input
                    type="C"
                    class="form-control"
                    id="exampleInputC1"
                    aria-describedby="CorreoHelp"
                  ></input>
                  <small id="CorreoHelp" class="form-text text-muted"></small>

                  <div class="Nombreusuario">
                    <label for="exampleInputEmail1">Nombre Usuario</label>
                    <input
                      type="Nombreusuario"
                      class="form-control"
                      id="exampleInputNombreusuario1"
                      aria-describedby="NombreusuarioHelp"
                    ></input>
                    <small
                      id="NombreusuarioHelp"
                      class="form-text text-muted"
                    ></small>

                    <div class="contraseña">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      ></input>

                      <button class="bregistro"> Finalizar Registro </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  );
}
export default D_RegistrarseA;