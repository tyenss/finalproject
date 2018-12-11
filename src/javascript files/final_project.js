import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import $ from 'jquery';
import MainPage from "../react components/mainPage.jsx";
import AcceptPage from "../react components/acceptPage.jsx";
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
	var arr_time={at:""};
	var flight_id={fi:""};
	var arr_loc={al:""};
	var date={d:""};
	var dept_airport={da:""};
	var arr_airport={aa:""};
	var lat={l:""};
	var long={l:""};

	//build_airlines_interface();
	console.log("beFORE");
	get_random_airline(airline_1,airline_id,logo)
	  .then(success => get_airplane(airline_id,plane))
	  .then(success => get_flight(airline_id, dest, dept_time, arr_time, flight_id, arr_loc))
	  .then(success => get_cost(cost))
	  .then(success => get_airport(dest,arr_loc,dept_airport,arr_airport,lat,long))
	  .then(success => {
		  console.log(airline_1.al);
		  ReactDOM.render(<MainPage airline={airline_1.al} airplane={plane.pv} cost={cost.cv}
			destination={dept_airport.da} logo={logo.lg} latitude={lat.l} longitude={long.l}/>,document.getElementById("root"));
	  })	
}

export function create_accept_page(){
	var airline_id={id:""};
	var airline_1 = {al:""};
	var logo={lg:""};
	var plane={pv:""};
	var dest={dv:""};
	var cost={cv:""};
	var dept_time={dt:""};
	var arr_time={at:""};
	var flight_id={fi:""};
	var arr_loc={al:""};
	var date={d:""};
	var dept_airport={da:""};
	var arr_airport={aa:""};
	var lat={l:""};
	var long={l:""};

	//build_airlines_interface();
	console.log("beFORE");
	get_random_airline(airline_1,airline_id,logo)
	  .then(success => get_airplane(airline_id,plane))
	  .then(success => get_flight(airline_id, dest, dept_time, arr_time, flight_id, arr_loc))
	  .then(success => get_date(date,flight_id))
	  .then(success => get_cost(cost))
	  .then(success => get_airport(dest,arr_loc,dept_airport,arr_airport,lat,long))
	  .then(success => {
		  console.log(arr_loc.al);
		  /*console.log(arr_airport.aa);
		  console.log(date.d);
		  console.log(lat.l);
		  console.log(long.l);*/

		  ReactDOM.render(<AcceptPage name={plane.pv} departingTime={dept_time.dt}
			arrivalTime={arr_time.at} flightID={flight_id.fi} departingLocation={dept_airport.da} 
			arrivingLocation={arr_airport.aa} date={date.d}/>,document.getElementById("root"));
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

var get_flight = function(airline_id, dest, dept_time, arr_time, flight_id, arr_loc){
	return $.ajax(root_url + "flights",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (flights) => {
				for (let i=0; i<flights.length; i++) {
					if(flights[i].airline_id === airline_id.id){
						dest.dv = flights[i].departure_id;
						dept_time.dt = flights[i].departs_at;
						arr_time.at = flights[i].arrives_at;
						flight_id.fi = flights[i].id;
						arr_loc.al = flights[i].arrival_id;
					}
				}
	       }
	   });
};

var get_airport = function(dest,arr_loc,dept_airport,arr_airport,lat,long){
	return $.ajax(root_url + "airports",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airports) => {
				for (let i=0; i<airports.length; i++) {
					if(airports[i].id === dest.dv){
						dept_airport.da = airports[i].name;
						lat.l = airports[i].latitude;
						long.l = airports[i].longitude;
					}
					if(airports[i].id === arr_loc.al){
						arr_airport.aa = airports[i].name;
					}
				}
		   }
	   });
} 

var get_date = function(date,flight_id){
	return $.ajax(root_url + "instances",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (instances) => {
				for (let i=0; i<instances.length; i++) {
					if(instances[i].flight_id === flight_id.fi){
						date.d = instances[i].date;
					}
				}
		   }
	   });
}


//randomly generate a cost for a flight
var get_cost = function(cost){
	cost.cv = Math.floor(Math.random() * (700 - 200) + 200);
	return Promise.resolve(cost);
}


export {login,create_new_flight_info};