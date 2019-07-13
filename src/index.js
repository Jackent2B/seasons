import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader"

//functional state
// var App = ()=> {
// 	// it is geolocation APi
// 			window.navigator.geolocation.getCurrentPosition(
// 				(position)=>console.log(position),

// 				(err) => console.log(err)
 
// 				);
// 		return (
// 			<div>Latitude:  </div>
// 			);
// };


//class state
//more effective and fast
class App extends React.Component {

	 //it is geolocation API
   //we have put it here instead of  in render function beacause render function executes a lot of time and we don't want to execute geolocation() function again and again
   //window.navigator.geolocation.getCurrentPosition(........ 
   //this above API  was here earlier but now it is in componentDidMount() function.
   //because it is always better to use API and all in  componentDidMount() which renders only once initially.



//it belongs to javaScript language more than react
//it will be called first i.e. initialising STATE
//STATE initialisation
// constructor(props){
	//it is always to be called without any reason
	// super(props);

//initial position
//THIS IS THE ONLY TIME we do direct assisgnment.
// 	this.state = { lat: null, errorMessage:"" };

// }


//vERY very IMPORTANT
//either use constructor or use this below function. BOTH ARE SAME
state = { lat: null, errorMessage:"" };

//this function() executes just after something is visible on page.
componentDidMount(){
   //it is geolocation API
   //we have put it here instead of  in render function beacause render function executes a lot of time and we don't want to execute geolocation() function again and again
		window.navigator.geolocation.getCurrentPosition(
			(position)=>{
				//we called setState for UPDATION
				//console.log(position);
				this.setState({lat: position.coords.latitude});
			},

			(err) => {
				//console.log(err);
				this.setState({errorMessage: err.message});
			}

			);
}

//it gets executed when a update is made that is every last time the page get rendered
componentDidUpdate() {
	console.log("hey i am just updated");
}


//helper function
renderContent(){

//jsx
			if(this.state.errorMessage && !this.state.lat ){
				return <div>Error: {this.state.errorMessage} </div>
			}

			if(this.state.lat && !this.state.errorMessage ){
				return <div><SeasonDisplay lat={this.state.lat}/> </div>
			}

			else
				return <Loader message="Please Allow Location to load our data"/>

}


//React says we have to define render!!
	render(){
		return (
//here we have shifted our main render jsx to renderContent so that we avoid multiple return statements.
//here we have used another div to demonstrate that we can also use a common div tag to apply a common property to all the cases  whichever gets executed.(i.e to all if-else statements.) 
			<div className = "border red">
			 	{this.renderContent()}
			</div>
		);	
	}

}

ReactDOM.render(<App />,document.querySelector("#root"))