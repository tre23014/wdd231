export function parkInfoTamplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero_subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
    return `<div class="media-card">
        <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card_img">
        <h3 class="media-card_title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
        </div>`;
}

function getMailingAddress(address) {
    const mailing = address.find((address) => address.type === "Mailing");
    return mailing;
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}
export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
    `;
}