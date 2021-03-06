import BitcoinNews from "./components/BitcoinNews";
import BusinessNews from "./components/BusinessNews";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>

        <Link to="/">Home</Link>
        <br></br>

        <Link to="/business">Business</Link>
        <br></br>

        <Link to="/bitcoin">Bitcoin</Link>
        <br></br>

      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/business">
          <BusinessNews />
        </Route>
        <Route path="/bitcoin">
          <BitcoinNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;