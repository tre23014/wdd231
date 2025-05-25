//api.js

const baseUrl = "https://develper.nps.gov/api/v1";

async function getJson(endpoint) {
    // replace this with your actual key
    const apiKey = "7F6lMPJFx3cWTHf95w520a7IwbvB27MdZocoSSEU";

    //construct the url: base + endpoint + parameters
    const url = baseUrl + endpoint;

    // set the options. The important one here is the X-Api-key
    const options = {
        method: "GET",
        headers: {
            "Constent-Type": "application/json",
            "X-Api-key": apiKey
        }
    }

    // make the request
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    return data;
}

getJson('alerts?parkCode=acad,dena');
