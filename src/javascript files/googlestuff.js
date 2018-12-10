import $ from "jquery";

//For city and state, input address in following format: city,+State
//for Cities with spaces, like Chapel Hill, use + instead of space
//ex: Chapel+Hill,+NC
function geocoding(address)
{
    let baseUrl="https://maps.googleapis.com/maps/api/geocode/json?address=";
    let APIKey="&key=AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg";
    return $.ajax(baseUrl + address+APIKey,
    {
        type: 'GET',
        success: (response) =>
        {
            if (response.status==="OK")
            {
                return [response.results[0].geometry.location.lat,response.results[0].geometry.location.lng];
            }

        }
    });
}