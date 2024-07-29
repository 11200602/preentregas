import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Usa el componente NavBar */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
pp;
