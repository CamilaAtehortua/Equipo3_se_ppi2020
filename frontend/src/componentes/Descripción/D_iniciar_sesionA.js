import React from "react";


function D_iniciar_sesionA() {
return (
  <>
  <div class="row">
             <div class="col-md-3"> </div>
            <div class="col-md-3 col-sm-8">
      <div class="contenedor">
  
        <div className="container formulario mt-3">
          <form class="elemento elemento1">
            <h2>Iniciar Sesión</h2>
            <div class="Email">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              <small id="emailHelp" class="form-text text-muted">
                
              </small>
              <div class="contraseña">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                ></input>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Iniciar 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div class="col-md-3"></div>
</div>
      
      
      
    
    </>
  );
}
  

export default D_iniciar_sesionA;
