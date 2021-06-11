import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import LoginRegistro from "./componentes/modals/LoginRegistro";
import Home from "./componentes/home/Home"
import DetallePage from "./componentes/productos/DetalleProducto"


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={LoginRegistro}/>
    <Route exact Path="/home" component={Home}/>
    <Route exact path="/producto/:id" component={DetallePage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
