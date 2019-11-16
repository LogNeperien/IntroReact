import React from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Client.js'; 
import ClientForm from './ClientForm.js'; 

class App extends React.Component {
	
	
	
  state = {
    clients : [
      {id : 1, nom : "Bob"},
      {id : 2, nom : "Martine"},
      {id : 3, nom : "Jeanne"}
    ]
  }

  handleClick2 = id => {
    //const clients = this.state.clients.slice(); //c'est la meme chose
	const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
	clients.splice(index,1);
    this.setState({clients})
  }
  
  handleAdd = client => {
	  const clients = [...this.state.clients];
      clients.push(client);
	  console.log(client.nom);
      this.setState({clients});
  }

  render() {

      return(
        <div>
			<h1>Liste de client</h1>
			<ul>
			  {this.state.clients.map(
				client => (<Client details={client} onDelete={this.handleClick2} />)
			  )}
			</ul>
			<ClientForm handleAdd ={this.handleAdd}/>
        </div>
      )

  }

}

export default App;
