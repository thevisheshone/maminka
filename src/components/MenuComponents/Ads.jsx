import React from 'react';
import './MenuStyles.scss';


import ad1 from "../../../images/ad1.jpg";
import ad2 from "../../../images/ad2.jpg";
import ad3 from "../../../images/ad3.jpg";



export default class Ads extends React.Component {

	render() {

		return (

			<div className="adsWrapper">
				<img src={ad1} />
				<img src={ad2} />
				<img src={ad3} />
			</div>
			);
	}
}