// create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {
  // pickup imageContainer
  const container = document.querySelector("#images");

  // pickup cloneContainer
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clone the last image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verify the first field, if it`s empty, don't add another field
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //clean the field
  input.value = "";

  // add the clone to imageContainer
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  console.log(span);
  if (fieldsContainer.length < 2) {
    //clean the fieldsContainer
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');
  console.log(input);

  input.value = button.dataset.value;
}
