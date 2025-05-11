import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
    const introEL = document.querySelector(".intro");
    introEL.innerHTML = `<h1>${parkData.fullName}</h1> 
    <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoEL = document.querySelector(".info");

    const html = data.map(mediaCardTemplate);

    infoEL.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkData);
}

init();