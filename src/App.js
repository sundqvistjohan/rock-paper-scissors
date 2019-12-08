import React from 'react';
import { Switch, Route } from "react-router-dom"
import RockPaperScissors from "./RockPaperScissors"
import Header from "./Header"
import Landing from "./Landing"

function App() {
  return (
    <div className="App">
      <Route path="/" render={(props) => (props.location.pathname !== "/") && <Header />}></Route>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/rps' component={RockPaperScissors}></Route>
      </Switch>
    </div>
  );
}

export default App;
