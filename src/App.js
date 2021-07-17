import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./componentes/Home"
import AddImg from "./componentes/addImg";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Home/>
        </Route>

     </Switch>
    </BrowserRouter>
  );
}

export default App;
