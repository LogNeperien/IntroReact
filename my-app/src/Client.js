import React, {Component} from "react";

//class Client extends Component {

//ceci est un composant fonctionnel
const Client = ({details, onDelete}) => 
(
	<li>
		{details.nom} <button onClick={() => onDelete(details.id)}>X</button>
	</li>
);
	
	


export default Client;