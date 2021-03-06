import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/app.css";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import Navigation from "./components/Navigation";
import CardListContainer from "./containers/CardListContainer";
import AddForm from "./components/AddForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/entrar" component={props => <UserForm {...props} title="Entrar" />} />
          <Route path="/cadastrar" component={props => <UserForm {...props} title="Cadastrar" />} />
          <Route path="/lista-de-assistidos" component={CardListContainer} />
          <Route path="/add-assistido" component={AddForm} />
          <Route path="/assistido/:id" component={AddForm} />
          <Route path="/lista-para-assistir" component={CardListContainer} />
          <Route path="/add-para-assistir" component={AddForm} />
          <Route path="/para-assistir/:id" component={AddForm} />
        </Switch>
      </div>
    );
  }
}
