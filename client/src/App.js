import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Upload from "./pages/Upload/Upload";
import Collection from "./pages/Collection/Collection";
import Wallet from "./pages/Wallet/Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/sell">
          <Upload />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
