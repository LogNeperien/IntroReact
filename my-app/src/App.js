import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    clients : [
      {id : 1, nom : "Bob"},
      {id : 2, nom : "Martine"},
      {id : 3, nom : "Jeanne"}
    ]
  }

  render() {

      return(
        <div>
        <h1>Liste de client</h1>
        <ul>
          {this.state.clients.map(
            client => (
            <li>
             {client.nom} <button>X</button>
            </li>))}
        </ul>
        <input type="text" placeholder="Ajouter un client"></input>
        <button>Confirmer</button>
        </div>
      )

  }

}

export default App;
