/** map options*/
const options = {
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl:false
};

/* create map */
const map = L.map('mapid', options).setView([-7.107902,-34.8871213], 15);

/* create and add tileLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

/* create icon */
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


/**create and add marker */
L.marker([-7.1091427,-34.8830997], { icon }).addTo(map);

function selectImage(event) {
    const button = event.currentTarget;

    // remove as classes actives
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach(removeActiveClass);     // buttons.forEach((button) => {button.classList.remove('active')});

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o conteiner de imagem
    imageContainer.src = image.src;

    //add a classe active para o botao clicado
    button.classList.add('active');
};