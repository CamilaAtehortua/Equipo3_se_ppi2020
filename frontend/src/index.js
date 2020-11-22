import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BigCalendar from "react-big-calendar";
import DatePicker from "react-datepicker";
import $ from "jquery";
import popper from "../src/index.js";
import Pagina_inicial from "../src/Pages/pagina_inicial";
import Registrarse from "../src/Pages/Registrarse";
import Iniciar_sesion from "../src/Pages/Iniciar_sesion";
import Iniciar_sesionA from "../src/Pages/Iniciar_sesionA";
import RegistrarseA from "../src/Pages/RegistrarseA";
import Evento from "../src/Pages/Evento";
import Inf_evento from "../src/Pages/Inf_evento";
import Seccion_adm from "../src/Pages/Seccion_adm";
import Eventos_adm from "../src/Pages/Eventos_adm";
import Subir_event from "../src/Pages/Subir_event";
import Pr_matr from "../src/Pages/Pr_matr";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Iniciar_sesion />
  </React.StrictMode>,
  rootElement
);

//import "./styles.css";

//const rootElement = document.getElementById("root");
//ReactDOM.render(
// <>
// <h1 className="titulo">
// Parchate con las flores y sumergete en la cultura silletera.
//</h1>
//<button> Registrarse</button>
//<button> Iniciar Sesión </button>
//</>,
//rootElement
//);
