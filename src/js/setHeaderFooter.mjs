import { parkInfoTamplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;

    document.querySelector(".hero-banner > img").src = data.images[0].url;

    document.querySelector(".hero_content").innerHTML = parkInfoTamplate(data);
}

function setFooter(data) {
    const footerEL = document.querySelector("#park-footer");
    footerEL.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}