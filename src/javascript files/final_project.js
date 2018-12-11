import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import $ from 'jquery';
import MainPage from "../react components/mainPage.jsx";
import AcceptPage from "../react components/acceptPage.jsx";
import PreferencesPage from "../react components/preferencesPage.jsx";
window.$ = $;
let root_url = "http://comp426.cs.unc.edu:3001/";


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
var instance_id = {i:""}
var f_name={f:""};
var l_name={l:""};
var age={a:""};
var gender={g:""};
var email={e:""};
var plane_id={pi:""};

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
	airline_id={id:""};
	airline_1 = {al:""};
	logo={lg:""};
	plane={pv:""};
	dest={dv:""};
	cost={cv:""};
	dept_time={dt:""};
	arr_time={at:""};
	flight_id={fi:""};
	arr_loc={al:""};
	date={d:""};
	dept_airport={da:""};
	arr_airport={aa:""};
	lat={l:""};
	long={l:""};
	instance_id={i:""};
	f_name={f:""};
	l_name={l:""};
	age={a:""};
	gender={g:""};
	email={e:""};
	//build_airlines_interface();
	get_random_airline(airline_1,airline_id,logo)
	  .then(success => get_airplane(airline_id,plane))
	  .then(success => get_flight(airline_id, dest, dept_time, arr_time, flight_id, arr_loc))
	  .then(success => get_cost(cost))
	  .then(success => get_airport(dest,arr_loc,dept_airport,arr_airport,lat,long))
	  .then(success => {
		  console.log(airline_1.al);
		  ReactDOM.render(<MainPage airline={airline_1.al} airplane={plane.pv} cost={cost.cv}
			destination={arr_airport.aa} logo={logo.lg} latitude={lat.l} longitude={long.l}/>,document.getElementById("root"));
	  })	
}

export function create_accept_page(){
	get_date(date,flight_id)
	  .then(success=> {
		  get_customer_data();
		  make_a_ticket();
	  })
	  .then(success => {
		  make_itinerary(email);
	  })
	  .then(success => {
		  make_seat();
	  })
	  .then(success => {
		  ReactDOM.render(<AcceptPage personName={f_name.f} age={age.a} gender={gender.g} name={plane.pv} departingTime={dept_time.dt}
			arrivalTime={arr_time.at} flightID={flight_id.fi} 
			arrivingLocation={arr_airport.aa} date={date.d}/>,document.getElementById("root"));
	  })	
}

export function link_to_pref_page(){
	ReactDOM.render(<PreferencesPage/>,document.getElementById("root"));
}

export function create_ticket_api(){
	make_a_ticket()
	  .then(success => {
		  get_customer_data();
		//ReactDOM.render(<PreferencesPage first={f_name.f} last={l_name.l}
		//age={age.a} gender={gender.g} email={email.e}/>,document.getElementById("root"));
	  })
}


function make_a_ticket(){
	return $.ajax(root_url + 'tickets', {
		type: 'POST',
		xhrFields: { withCredentials: true },
		data: {
			"ticket": {
				"first_name": $("#firstText").val(),
				"last_name": $("#lastText").val(),
				"age": parseInt($("#ageText").val(), 10),
				"gender": $("#genderText").val(),
				"is_purchased": true,
				"instance_id": instance_id.i,
			}
		},
		success: function (make_a_ticket) {
			alert("Purchased!");
		}


	});
}

function make_itinerary(email){
	return $.ajax(root_url + 'itineraries', {
		type: 'POST',
		xhrFields: { withCredentials: true },
		data: {
			"itinerary": {
				"confirmation_code": Math.floor(Math.random() * (276000 - 270000) + 270000),
				"email": email.e,
			}
		},
		success: function (make_itinerary) {
			alert("Itinerary made!");
		}


	});
}

function make_seat(){
	var is_window = Math.random() >= 0.5
	var alphabet = "abcdefghijklm";

	return $.ajax(root_url + 'seats', {
		type: 'POST',
		xhrFields: { withCredentials: true },
		data: {
			"seat": {
				"plane_id": plane_id.pi,
				"number": alphabet[Math.floor(Math.random() * alphabet.length)],
				"row":Math.floor(Math.random() * (24-1)+1).toString(),
				"is_window":is_window,
				"is_aisle":!is_window,
				"is_exit":is_window,
			}
		},
		success: function (make_seat) {
			alert("seat made!");
		}


	});
}

function get_customer_data(){
	f_name.f = $("#firstText").val();
	age.a = $("#ageText").val();
	l_name.l = $("#lastText").val();
	gender.g = $("#genderText").val();
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
						plane_id.pi = planes[i].id;
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
						dept_airport.da = airports[i].city;
					}
					if(airports[i].id === arr_loc.al){
						arr_airport.aa = airports[i].city;
						lat.l = airports[i].latitude;
						long.l = airports[i].longitude;
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
						instance_id.i = instances[i].id;
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