/* create map */
const map = L.map('mapid').setView([-7.1495498,-34.9534044], 13);

/* create and add tileLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

/* create icon */
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

/**create and add marker */
let marker;
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remove icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker= L.marker([lat, lng], { icon }).addTo(map);
});


//adicionar no campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');
    
    //pegar o container para dupicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);
    
    //verificar se o campo está vazio
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
    }

    // limpar o campo de upload
    input.value = "";
    
    // add o clone ao container de fotos #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = '';
        return;
    }
    span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {
    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    //colocar a class .active no botão atual
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]')

    input.value = button.dataset.value;

}
