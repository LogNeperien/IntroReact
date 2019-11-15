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

  handleClick =() => {
    const clients = this.state.clients.slice();
    clients.push({id : 4, nom : "Eloi"})
    this.setState({clients : clients})
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
        <button onClick={this.handleClick}>Confirmer</button>
        </div>
      )

  }

}

export default App;
