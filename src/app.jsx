import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';


import Scanner from 'components/Scanner';
import ShoppingListMenuItem from 'components/MenuComponents/ShoppingListMenuItem.jsx';
import OffersAroundMe from 'components/MenuComponents/OffersAroundMe.jsx';
import RelatedItems from 'components/MenuComponents/RelatedItems.jsx';
import Ads from 'components/MenuComponents/Ads.jsx';

let ComparePrices = () => "compare prices";
// let OffersAroundMe = () => "Offers around me";


let MainMenu = class MainMenu extends React.Component {
	render() {
		return (<div className='MainMenu'>
			<Scanner />
			<ShoppingListMenuItem />
			<OffersAroundMe />
			<RelatedItems />
			<Ads />

		</div>)
	}
}

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				{/*<Navigation/>*/}
				<MainMenu />
				
			</div>
		)
	}
}
