import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagina_inicial from "../Pages/pagina_inicial";
import Registrarse from "../Pages/Registrarse";
import Iniciar_sesion from "../Pages/Iniciar_sesion";
import Iniciar_sesionA from "../Pages/Iniciar_sesionA";
import RegistrarseA from "../Pages/RegistrarseA";
import Evento from "../Pages/Evento";
import Inf_evento from "../Pages/Inf_evento";
import Seccion_adm from "../Pages/Seccion_adm";
import Eventos_adm from "../Pages/Eventos_adm";
import Subir_event from "../Pages/Subir_event";
import Pr_matr from "../Pages/Pr_matr";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Pagina_inicial" component={Pagina_inicial} />
          <Route exact path="/Evento" component={Evento} />
          <Route exact path="/Registrarse" component={Registrarse} />
          <Route exact path="/Iniciar_sesion" component={Iniciar_sesion} />
          <Route exact path="/Iniciar_sesionA" component={Iniciar_sesionA} />
          <Route exact path="/RegistrarseA" component={RegistrarseA} />
          <Route exact path="/Inf_evento" component={Inf_evento} />
          <Route exact path="/Seccion_adm" component={Seccion_adm} />
          <Route exact path="/Eventos_adm" component={Eventos_adm} />
          <Route exact path="/Subir_event" component={Subir_event} />
          <Route exact path="/Pr_matr" component={Pr_matr} />

</Switch>
      </BrowserRouter>
    );
  }
}

export default App;