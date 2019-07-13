import React from "react";
import './SeasonDisplay.css'
import ReactDOM from "react-dom";

var seasonConfig = {
summer: {
	text:"Lets hit the Beach",
	image: 'sun'
},
winter: {
	text: "Burr! Its Chilly",
	image: 'snowflake '
}
};







var getSeason = (lat,month) =>{
	if(month>2 && month <9){
	return	lat > 0 ? 'summer' : 'winter' ;
	}else
	{
		return	lat > 0 ? 'winter' : 'summer' ;
	}

}


var SeasonDisplay= (props)=> {
		var season = getSeason (props.lat, new Date().getMonth());
		var {text, image} = seasonConfig[season]

	return (
	<div className = {`season-display ${season}`}>
	<i className = {`icon-left massive ${image} icon`} />
	<h1>{text}</h1>
	<i className = {`icon-right massive ${image} icon`} />
	</div>
	);
};

export default SeasonDisplay;