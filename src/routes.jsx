import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import ShoppingList from './components/ShoppingList';

import allProducts from './components/ProductsDB.json';

import 'styles/index.scss';

export default class Routes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userShoppingList: [],
			allProducts: allProducts
		}
	}
	render() {
		const CustomShoppingList = (allProducts) => {
			return (
				<ShoppingList allProducts={this.state.allProducts} userShoppingList={this.state.userShoppingList} />
				);
		}
		return (
			<Router>
				<div>
					<Route exact path="/" component={App}/>
					<Route path="/about" component={About}/>
					<Route path="/sample" component={Sample}/>
					<Route path="/shoppinglist" render={CustomShoppingList} />
				</div>
			</Router>
		)
	}
}




