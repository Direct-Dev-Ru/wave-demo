import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				<input
					className="btn btn-primary col-12"
					type="submit"
					value="Alert"
					onClick={() => {
						alert("Alert button clicked");
						console.log("Alert button clicked");
					}}
				/>
				<p>Press with pretty button to get an alert !!!</p>
			</div>
		);
	}
}

const app = document.getElementById("app");
if (app) {
	ReactDOM.render(<App />, app);
}
