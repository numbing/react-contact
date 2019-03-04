import React, { Component } from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="header management" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
