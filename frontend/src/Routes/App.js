import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.css";
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

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pagina_inicial} />
          <Route
            exact
            path="/Pagina_estudiantes"
            component={Pagina_estudiantes}
          />


