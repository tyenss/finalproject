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
    var airline_id="";
    var airline_1 = "";
    var logo="";
    var plane="";
    var dest="";
    var cost="";
    //build_airlines_interface();
    //console.log("beFORE");
    get_random_airline(airline_1,airline_id,logo,plane, dest,cost,get_random_airline());

    //console.log(dest);
    //return [airline_1,plane,cost,dest,logo];

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

function get_random_airline(airline_1,airline_id,logo,plane, dest,cost){

    $.ajax(root_url + "airlines",
        {
            type: 'GET',
            xhrFields: {withCredentials: true},
            success: (airlines) => {
                var rand = Math.floor(Math.random() * (airlines.length -1));
                airline_1 = airlines[rand].name;
                airline_id = airlines[rand].id;
                logo = airlines[rand].logo_url;
                get_airplane(airline_id, airline_1, logo,plane,dest,cost);


            }
        });
}

function get_airplane(airline_id,airline_1, logo,plane, dest,cost){
    $.ajax(root_url + "planes",
        {
            type: 'GET',
            xhrFields: {withCredentials: true},
            success: (planes) => {
                let rand = Math.floor(Math.random() * (planes.length -1));
                plane= planes[rand].name;


                //console.log(plane);
                get_flight(airline_id, plane, airline_1, logo, dest, cost);
            }
        });
}

function get_flight(airline_id, plane, airline_1, logo, dest, cost){
    $.ajax(root_url + "flights",
        {
            type: 'GET',
            xhrFields: {withCredentials: true},
            success: (flights) => {
                let rand = Math.floor(Math.random() * (flights.length -1));
                dest = flights[rand].departure_id;

                get_cost(cost, plane,airline_1,dest,logo);
            }
        });

};

//randomly generate a cost for a flight
var get_cost = function(cost, plane,airline_1,dest,logo)
{
    cost = Math.random() * (700 - 200) + 200;
    ReactDOM.render(<MainPage airline={airline_1} airplane={plane} cost={cost}
                             destination={dest} logo={logo}/>,document.getElementById("root"));

    //callback(plane,airline_1,dest,logo,cost,has_cost);
};

/*var create_mainpage = function(plane,airline_1,dest,logo,cost,has_cost){
	has_cost.hc=true;
	return [airline_1,plane,cost,dest,logo];
}*/

export {login,create_new_flight_info};