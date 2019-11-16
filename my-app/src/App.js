import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	
	
	
  state = {
    clients : [
      {id : 1, nom : "Bob"},
      {id : 2, nom : "Martine"},
      {id : 3, nom : "Jeanne"}
    ],
	nouveauClient: ''
  }

  handleClick2 = id => {
    //const clients = this.state.clients.slice(); //c'est la meme chose
	const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
	clients.splice(index,1);
    this.setState({clients})
  }
  
  handleSubmit = (event) => {
	  event.preventDefault()
	  
	  const id = new Date().getTime();
	  const nom = this.state.nouveauClient;
	  
	  //const clients = this.state.clients.slice(); //c'est la meme chose
	  const clients = [...this.state.clients];
      clients.push({id, nom});
      this.setState({clients, nouveauClient : ''});
  }
  
  handleChange = (event) => {
	  this.setState({nouveauClient : event.currentTarget.value});
  }

  render() {

      return(
        <div>
			<h1>Liste de client</h1>
			<ul>
			  {this.state.clients.map(
				client => (
				<li>
				 {client.nom} <button onClick={() => this.handleClick2(client.id)}>X</button>
				</li>))}
			</ul>
			<form onSubmit= {this.handleSubmit}>
				<input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"></input>
				<button>Confirmer</button>
			</form>
        </div>
      )

  }

}

export default App;
