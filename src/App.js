import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import AddImg from "./componentes/addImg";
import DataImg from "./componentes/confImg";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <DataImg/>
        </Route>

     </Switch>
    </BrowserRouter>
  );
}

export default App;
