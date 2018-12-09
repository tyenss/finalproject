import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import $ from 'jquery';
import MainPage from "../react components/mainPage.jsx";
window.$ = $;
let root_url = "http://comp426.cs.unc.edu:3001/";


function login(user,pass){

	//console.log(user);
	//console.log(pass);
	var airline_id="";
	var airline_1 = "";
	var logo="";
	var plane="";
	var dest="";
	var cost="";

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
			   build_airlines_interface();
			   get_random_airline();
			   get_airplane();
			   get_flight();
			   get_cost();
			   //take in airline, airplane, destination, cost, logo
			   ReactDOM.render(<MainPage airplane= {plane} airline={airline_1} destination={dest} logo={logo} cost={cost}/>,document.getElementById("root"));
			   //get_airport(Lihue Airport);
		   },
		   error: (jqxhr, status, error) => {
		       alert(error);
		   }
	       
    });
}

var build_airlines_interface = function() {
    let body = $('body');

    body.empty();

    body.append("<h2>Airlines</h2>");

    let airline_list = $("<ul id='airlines_list'></ul>");
    body.append(airline_list);

    let airline_add_div = $("<div>Name: <input id='new_airline_name' type='text'><br>" +
			    "<button id='make_airline'>Create</button></div>");

    body.append(airline_add_div);


    $.ajax(root_url + "airlines",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airlines) => {
				for (let i=0; i<airlines.length; i++) {
					airline_list.append("<li>" + airlines[i].name + "</li>");
				}
	       }
	   });

    $('#make_airline').on('click', () => {
	let airline_name = $('#new_airline_name').val();

	$.ajax(root_url + "airlines",
	       {
		   type: 'POST',
		   data: {
		       airline: {
			   name: airline_name
		       }
		   },
		   xhrFields: {withCredentials: true},
		   success: (airline) => {
		       airline_list.append("<li>" + airline.name + "</li>");
		   }
	       });
    });

}

var get_random_airline = function(){
	$.ajax(root_url + "airlines",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airlines) => {
				var rand = Math.random() * (airlines.length -1);
				window.airline_1 = airlines[rand].name;
				window.airline_id = airlines[rand].id;
				window.logo = airlines[rand].logo_url;
	       }
	   });
}

var get_airplane = function(){
	$.ajax(root_url + "planes",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (planes) => {
				for (let i=0; i<planes.length; i++) {
					if(planes[i].airline_id == window.airline_id){
						window.plane = planes[i].name; //last plane with matching airline is the one we will use
					}
				}
	       }
	   });
}

var get_flight = function(){
	$.ajax(root_url + "flights",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (flights) => {
				for (let i=0; i<flights.length; i++) {
					if(flights[i].airline_id == window.airline_id){
						window.dest = flights[i].departure_id;
					}
				}
	       }
	   });
}

//randomly generate a cost for a flight
var get_cost = function(){
	window.cost = Math.random() * (700 - 200) + 200;
}

export {login};