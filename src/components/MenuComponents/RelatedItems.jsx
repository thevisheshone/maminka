import React from 'react';
import './RelatedItems.scss';
import bread from '../../../images/bread.jpg';
import flakes from '../../../images/flakes.jpg';
import gatorade from '../../../images/gatorade.jpg';
import wheatflour from '../../../images/wheatflour.jpg';
import applejuice from '../../../images/applejuice.jpg';


export default class RelatedItems extends React.Component {


	render() {
		return <div className="relatedItemsWrap">
			<div className="heading">Items you may be interested in:</div>
			<div className="itemsWrap">
				<div className="item">
					<div className="itemImage">
						<img src={bread} />
					</div>
					<div className="name">Daily Fresh Wheat Bread</div>
					<div className="price">$2.3</div>
				</div>

				<div className="item">
					<div className="itemImage">
						<img src={flakes} />
					</div>
					<div className="name">Frosted Flakes</div>
					<div className="price">$3</div>
				</div>

				<div className="item">
					<div className="itemImage">
						<img src={gatorade} />
					</div>
					<div className="name">Gatorade 2l</div>
					<div className="price">$2.5</div>
				</div>

				<div className="item">
					<div className="itemImage">
						<img src={wheatflour} />
					</div>
					<div className="name">Wheat Montana Flour</div>
					<div className="price">$4</div>
				</div>

				<div className="item">
					<div className="itemImage">
						<img src={applejuice} />
					</div>
					<div className="name">Great Value Apple Juice</div>
					<div className="price">$1.8</div>
				</div>

			</div>
		</div>;
	}

}