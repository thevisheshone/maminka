import React from 'react';
import './Scanner.scss';
// import styles from './Scanner.scss';
// import BarcodeReader from 'barcode-reader';

export default class Scanner extends React.Component {
	constructor(props) {
		super(props);
		// BarcodeReader.Init();
		// BarcodeReader.SetImageCallback(this.responseFunction);
		this.state = {
			getUserMedia: {},
			mediaStream: {}
		};
	}


	componentDidMount() {
		let getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia || false);
		// this.setState({getUserMedia: getUserMedia});
		let that = this;
		if(getUserMedia) {
			navigator.getUserMedia({video: true}, function(localMediaStream) {
				that.setState({mediaStream: window.URL.createObjectURL(localMediaStream)});
				that.readBarcode();
			}, function(error) {
				console.error("Error getting user media", error);
			});
		}

	}

	readBarcode() {
		// console.log("decoding");
		// BarcodeReader.DecodeStream(this.state.mediaStream, (response) => {

		// 	console.log(response);
		// });
	}


	render() {
		return <div className="scannerWrapper">
			<div className="outerborder"></div>
			<video id="cameraStream" className="cameraStream" width="100%" autoPlay src={this.state.mediaStream} ></video>
		</div>;
	}

}