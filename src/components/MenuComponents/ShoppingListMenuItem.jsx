import React from 'react';
import './MenuStyles.scss';
import shoppingIcon from '../../../images/shoppingIcon.png';
import { Link } from 'react-router-dom';

export default class ShoppingList extends React.Component {
	render() {
		return <Link to="/shoppinglist">
			<div className="menuListItem" onClick={this.openShoppingList}>
				Shopping List
				<img src={shoppingIcon} className="menuIcon" />
			</div>
		</Link>;
	}
}