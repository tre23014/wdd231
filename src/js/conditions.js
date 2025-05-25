import "../css/style.css";
import "../css/consitions.css";
import {
    getParkData,
    getParkAlerts,
    getParkVisitorCenters
} from "./parkService.mjs";
import {
    activityListTemplate
} from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsConstainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers) {
    const centersConatiner = document.querySelector(".visitor ul");
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getParkVisitorCenters(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorsCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();