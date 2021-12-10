import React from "react";
import Movies from "./components/movies";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/404";
import Nav from "./components/nav";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/movies" exact component={Movies}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/Customers" component={Customers}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/404" component={NotFound}></Route>

          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
