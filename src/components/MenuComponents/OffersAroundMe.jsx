import React from 'react';
import './MenuStyles.scss';
import offersIcon from '../../../images/offers.png';


export default class ShoppingList extends React.Component {
	render() {
		return <div className="menuListItem">
			Offers around me
			<img src={offersIcon} className="menuIcon" />
		</div>;
	}
}