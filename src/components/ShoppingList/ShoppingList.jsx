import React from 'react';
import './ShoppingList.scss';

import checkedIcon from '../../../images/checked.png';
import uncheckedIcon from '../../../images/unchecked.png';
import hticon from '../../../images/harristeeter.png';
import krogerIcon from '../../../images/kroger.png';


export default class ShoppingList extends React.Component {

	constructor(props) {
		super(props);

		let justNames = props.allProducts.map((product)=>product.name);
		console.log(justNames);
		this.state = {
			shoppingList: props.userShoppingList,
			allProducts: props.allProducts,
			justNames: justNames,
			newItemValue: "",
			suggestions: null
		};


		this.newItemChange = this.newItemChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	toggleItem(i) {
		let newList = this.state.shoppingList;
		newList[i].checked = !this.state.shoppingList[i].checked;

		this.setState({shoppingList: newList});
	}
	newItemChange(event) {
		let currentValue = event.target.value;
		let suggestedValues = [];
		let kroger = false;
		if(currentValue && currentValue.length>0) {
			suggestedValues = this.state.justNames.map((name)=> {
				if(name.toLowerCase().match(currentValue.toLowerCase())) return name;
				return null;
			});
			this.setState({suggestions: suggestedValues});
		} else {
			this.setState({suggestions: null});
		}

		this.setState({newItemValue: currentValue});
	}
	addItem(suggestion) {

		let searchedItem = null;
		this.state.allProducts.map((item, i)=> {
			if(item.name === suggestion) {
				searchedItem = item;
			}
		});
		if(!searchedItem) return;

		let newList = this.state.shoppingList;
		newList.push({name: searchedItem.name, checked: false, price: searchedItem.price});

		this.setState({
			shoppingList: newList,
			newItemValue: "",
			suggestions: null
		});
	}
	render() {
		// console.log(this.state);
		let finalPrice = 0;
		let HT = false;
		this.state.shoppingList.map((listItem)=>{
			finalPrice+=listItem.price;

			if(listItem.name.toLowerCase().match('banana')) {
				HT = true;
			}
		});
		return (<div>
			<div className="heading">Shopping List</div>
			
			<center>
			<div className="shoppingListWrapper">
				{this.state.shoppingList &&  this.state.shoppingList.length>0 && this.state.shoppingList.map((listItem, i) => {
					// console.log(listItem.name, listItem.checked);
					return <div className="listItem" key={i}>
						<img className={"checkboxIcon " + (listItem.checked ? "checkedItem" : "uncheckedItem")} src={listItem.checked ? checkedIcon : uncheckedIcon} onClick={this.toggleItem.bind(this,i)} />
						<div className="itemName"> {listItem.name} </div>
					</div>;
				})}
				<div className="newItem">
					<input type="text" className="newItemTextBox" onChange={this.newItemChange} value={this.state.newItemValue} ref={(input)=>{this.addInputField = input}} placeholder="Start typing to search"/>
					<div className="suggestionsWrapper">
						{this.state.suggestions && this.state.suggestions.length>0 && this.state.suggestions.map((suggestion, i)=> {
							if(!suggestion) return;
							return <div className="suggestion listItem" onClick={this.addItem.bind(this,suggestion)} key={i}>{suggestion}</div>
						})}
					</div>
				</div>
			</div>
			</center>


			{this.state.shoppingList && this.state.shoppingList.length>0 && <div className="totalCalculation">
				{HT ? 
					<div>
						<div className="texts">
							<div className="where">You would save the most if you shop at <span className="whereName">Harris Teeter</span></div>
							<div className="cost">Your total bill would be <span className="billAmount">${finalPrice}</span></div>
						</div>
						<div className="logo">
							<img src={hticon} className="icon" />
						</div>
						<div className="bottomButtons">
							<a href="https://www.google.co.in/maps/place/Harris+Teeter/@38.0501513,-78.5068024,17z/data=!3m2!4b1!5s0x89b387b3eda945d5:0x7edf0a3a9a6d55b5!4m5!3m4!1s0x89b387b42f8157a9:0x18d1680bace7509!8m2!3d38.0501513!4d-78.5046137">
								<div className="buttonLeft">Directions</div>
							</a>
							<a href="tel:4349842900">
								<div className="buttonRight">Call</div>
							</a>
						</div>
					</div>
					:
					<div>
						<div className="texts">
							<div className="where">You would save the most if you shop at <span className="whereName">Kroger</span></div>
							<div className="cost">Your total bill would be <span className="billAmount">${finalPrice}</span></div>
						</div>
						<div className="logo">
							<img src={krogerIcon} className="icon" />
						</div>
						<div className="bottomButtons">
							<a href="https://www.google.co.in/maps/place/Kroger/@38.0304314,-78.5036064,13z/data=!3m1!5s0x89b387b6ff2daf9f:0x7edf0a3a39ad3b95!4m8!1m2!2m1!1skrogers!3m4!1s0x89b387b669ea664b:0x8b5a3597a3795b48!8m2!3d38.0535657!4d-78.5006887">
								<div className="buttonLeft">Directions</div>
							</a>
							<a href="tel:4342935176">
								<div className="buttonRight">Call</div>
							</a>
						</div>
					</div>
				}
			</div>}

		</div>);
	}



}