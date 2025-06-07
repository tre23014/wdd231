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

function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");

    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;

        // toggle the show class on the global-nav
        document.querySelector("#global-nav").classList.toggle("show");

        // check to see if target is the button or something inside the button
        if (target.tagName !== "BUTTON") {
            target = target.closest("button");
        }

        // check to see if we just opened or closed the menu
        if (document.querySelector("#global-nav").classList.contains("show")) {
            target.setAttribute("aria-expanded", "true");
        } else {
            target.setAttribute("aria-expanded", "false");
        }

        // if we opened it then set the aria-expanded attribute on the button to true

        // if we closed it then set the aria-expanded attribute on the button to false

        console.log("Menu toggled");
    });
}
async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkData);
}

init();