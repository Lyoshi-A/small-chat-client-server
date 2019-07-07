import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Sidebar} from "./containers/Sidebar"
import {MessagesList} from "./containers/MessagesList"
import {AddMessage} from "./containers/AddMessage"
class App extends Component {
  render() {
    return (
        <>
          <div className="chat-container">
            <section className="main-card">
              <MessagesList />
              <AddMessage />
            </section>
          </div>
          <Sidebar />
        </>
    );
  }
}

export default App;
