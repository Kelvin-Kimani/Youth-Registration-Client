import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from './components/Welcome'
import RegistrationForm from './components/RegistrationForm';
import Confirmation from "./components/Confirmation";


function App() {
  return (
      <Router>
          <div>
              <Switch>
                  {/*<Route exact path='/'>*/}
                  {/*  <Welcome/>*/}
                  {/*</Route>*/}

                  <Route exact path='/'>
                      <RegistrationForm/>
                  </Route>

                  <Route exact path='/confirmation'>
                      <Confirmation/>
                  </Route>

              </Switch>
          {/*    Footer*/}
          </div>
      </Router>
  );
}

export default App;
