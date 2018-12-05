import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import $ from 'jquery';
window.$ = $;
let root_url = "http://comp426.cs.unc.edu:3001/";


function login(user,pass)
{
    $('#login_btn').on('click', () => {

	let user = $('#user').val();
	let pass = $('#pass').val();

	console.log(user);
	console.log(pass);

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
			   build_planes_interface();
			   build_airports_interface();
			   ReactDOM.render(<mainPage airplane={"asdf"} airline={"asdf"}/>,document.getElementById("root"));
			   //get_airport(Lihue Airport);
		   },
		   error: (jqxhr, status, error) => {
		       alert(error);
		   }
	       });
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

};

var build_planes_interface = function() {
    let body = $('body');

    body.append("<h2>Planes</h2>");

    let plane_list = $("<ul id='planes_list'></ul>");
    body.append(plane_list);

    let plane_add_div = $("<div>Name: <input id='new_plane_name' type='text'><br>" +
			    "<button id='make_plane'>Create</button></div>");

    body.append(plane_add_div);


    $.ajax(root_url + "planes",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (planes) => {
		   for (let i=0; i<planes.length; i++) {
		       plane_list.append("<li>" + planes[i].name + "</li>");
		   }
	       }
	   });

    $('#make_plane').on('click', () => {
	let plane_name = $('#new_plane_name').val();

	$.ajax(root_url + "planes",
	       {
		   type: 'POST',
		   data: {
		       plane: {
			   name: plane_name
		       }
		   },
		   xhrFields: {withCredentials: true},
		   success: (plane) => {
		       plane_list.append("<li>" + plane.name + "</li>");
		   }
	       });
    });

};

var build_airports_interface = function() {
    let body = $('body');

    body.append("<h2>Airports</h2>");

    let airport_list = $("<ul id='airports_list'></ul>");
    body.append(airport_list);

    let airport_add_div = $("<div>Name: <input id='new_airport_name' type='text'><br>" +
			    "<button id='make_airport'>Create</button></div>");

    body.append(airport_add_div);


    $.ajax(root_url + "airports",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airports) => {
		   for (let i=0; i<airports.length; i++) {
		       airport_list.append("<li>" + airports[i].name + "</li>");
		   }
	       }
	   });

    $('#make_airport').on('click', () => {
	let airport_name = $('#new_airport_name').val();

	$.ajax(root_url + "airports",
	       {
		   type: 'POST',
		   data: {
		       plane: {
			   name: airport_name
		       }
		   },
		   xhrFields: {withCredentials: true},
		   success: (airport) => {
		       airport_list.append("<li>" + airport.name + "</li>");
		   }
	       });
    });

};
/*def get_airport = function(airport_1){
	let body = $('body');
    body.append("<h3>Airport found:</h3>");
    let airport_list = $("<ul id='airports_list'></ul>");
    body.append(airport_list);
    $.ajax(root_url + "airports",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airports) => {
		   for (let i=0; i<airports.length; i++) {
			   if airports[i].name==airport1{
				   airport_list.append("<li>" + airports[i].name + "</li>");
			   }
		   }
	       }
	   });
};*/

