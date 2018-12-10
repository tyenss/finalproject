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
	var has_cost = {hc:false};
	build_airlines_interface();
	console.log("beFORE");
	get_random_airline(airline_1,airline_id,logo,plane, dest,cost,has_cost,get_airplane);
	
	//console.log(dest);
	return [airline_1,plane,cost,dest,logo];
	//console.log("AFTERRRRRRR");
	/*while(!has_cost.hc){
		continue;
	}*/
	/*get_airplane(airline_id, plane);
	get_flight(airline_id, dest);
	get_cost(cost, has_cost);*/
	
	//take in airline, airplane, destination, cost, logo
	//ReactDOM.render(<MainPage airplane= {plane.pv} airline={airline_1.al} destination={dest.dv} logo={logo.lg} cost={cost.cv}/>,document.getElementById("root"));
	
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

var get_random_airline = function(airline_1,airline_id,logo,plane, dest,cost,has_cost,callback){
	
	$.ajax(root_url + "airlines",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airlines) => {
				var rand = Math.floor(Math.random() * (airlines.length -1));
				airline_1.al = airlines[rand].name;
				airline_id.id = airlines[rand].id;
				logo.lg = airlines[rand].logo_url;
				callback(airline_id, airline_1, logo,plane,dest,cost,has_cost,get_flight);
				
				
	       }
	   });
}

var get_airplane = function(airline_id,airline_1, logo,plane, dest,cost,has_cost,callback){
	$.ajax(root_url + "planes",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (planes) => {
				for (let i=0; i<planes.length; i++) {
					if(planes[i].airline_id === airline_id.id){
						plane.pv = planes[i].name; //last plane with matching airline is the one we will use
					}
				}
				//console.log(plane);
				callback(airline_id, plane, airline_1, logo, dest, cost, has_cost,get_cost);
		   }
	   });
}

var get_flight = function(airline_id, plane, airline_1, logo, dest, cost,has_cost,callback){
	$.ajax(root_url + "flights",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (flights) => {
				for (let i=0; i<flights.length; i++) {
					if(flights[i].airline_id === airline_id.id){
						dest.dv = flights[i].departure_id;
					}
				}
				callback(cost, plane,airline_1,dest,logo,has_cost);
	       }
	   });
};

//randomly generate a cost for a flight
var get_cost = function(cost, plane,airline_1,dest,logo,has_cost){
	cost.cv = Math.random() * (700 - 200) + 200;
	//callback(plane,airline_1,dest,logo,cost,has_cost);
}

/*var create_mainpage = function(plane,airline_1,dest,logo,cost,has_cost){
	has_cost.hc=true;
	return [airline_1,plane,cost,dest,logo];
}*/

export {login,create_new_flight_info};