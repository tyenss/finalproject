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
		       build_airlines_interface();
			   ReactDOM.render(<MainPage airplane={"asdf"} airline={"asdf"}/>,document.getElementById("root"));
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
export {login};