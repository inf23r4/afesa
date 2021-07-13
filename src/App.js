import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddImg from "./componentes/addImg";
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <AddImg/>
        </Route>

     </Switch>
    </BrowserRouter>
  );
}

export default App;
