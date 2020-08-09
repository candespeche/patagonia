import React from 'react';
import Landing from "./Components/Landing/Landing"
import Form from "./Components/Form/FormContainer"
import Success from "./Components/SuccessError/Success"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;


