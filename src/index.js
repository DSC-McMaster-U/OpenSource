import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ledger from './managementTab/ledger/Ledger'
import ShoppingList from './managementTab/shoppingList/shoppingList'
import ChoreList from './managementTab/choreList/choreList'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Ledger/>
		<ShoppingList/>
		<ChoreList/>
	</React.StrictMode>,
	document.getElementById('root')
);
