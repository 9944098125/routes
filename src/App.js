
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
         </Switch>
      </header>
    </div>
  </BrowserRouter>
);

export default App;
