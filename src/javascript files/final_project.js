import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import $ from 'jquery';
import MainPage from "../react components/mainPage.jsx";
window.$ = $;
let root_url = "http://comp426.cs.unc.edu:3001/";


function login(user,pass){

	//console.log(user);
	//console.log(pass);

	$.ajax(root_url + "sessions",
	       {
		   type: 'POST',
		   xhrFields: {withCredentials: true},
		   data: {
		       user: {
			   username: user,
			   password: pass
		       }
		   },
		   success: () =>
		   {
			   create_new_flight_info();
		   },
		   error: (jqxhr, status, error) => {
		       alert(error);
		   }
	       
    });
}

function create_new_flight_info(){
	var airline_id={id:""};
	var airline_1 = {al:""};
	var logo={lg:""};
	var plane={pv:""};
	var dest={dv:""};
	var cost={cv:""};
	var dept_time={dt:""};

	//build_airlines_interface();
	console.log("beFORE");
	get_random_airline(airline_1,airline_id,logo)
	  .then(success => get_airplane(airline_id,plane))
	  .then(success => get_flight(airline_id, dest))
	  .then(success => get_cost(cost))
	  .then(success => {
		  console.log(airline_1.al);
		  ReactDOM.render(<MainPage airline={airline_1.al} airplane={plane.pv} cost={cost.cv}
			destination={dest.dv} logo={logo.lg}/>,document.getElementById("root"));
	  })	
}

var get_random_airline = function(airline_1,airline_id,logo){
	
	return $.ajax(root_url + "airlines",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airlines) => {
				var rand = Math.floor(Math.random() * (airlines.length -1));
				airline_1.al = airlines[rand].name;
				airline_id.id = airlines[rand].id;
				logo.lg = airlines[rand].logo_url;
	       }
	   });
}

var get_airplane = function(airline_id,plane){
	return $.ajax(root_url + "planes",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (planes) => {
				for (let i=0; i<planes.length; i++) {
					if(planes[i].airline_id === airline_id.id){
						plane.pv = planes[i].name; //last plane with matching airline is the one we will use
					}
				}
		   }
	   });
}

var get_flight = function(airline_id, dest){
	return $.ajax(root_url + "flights",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (flights) => {

	           for (let i=0; i<flights.length; i++) {
                   if(flights[i].airline_id === airline_id.id){
                       dest.dv = flights[i].departure_id;
                   }
               }
               $.ajax(root_url + "flights/",
                   {
                       type: 'GET',
                       xhrFields: {withCredentials: true},
                       success: (response) => {

                       }
                   });
	       }
	   });
};

//randomly generate a cost for a flight
var get_cost = function(cost){
	cost.cv = Math.floor(Math.random() * (700 - 200) + 200);
	return Promise.resolve(cost);
}


export {login,create_new_flight_info};