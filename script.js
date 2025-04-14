const loadingText = document.getElementById('loading');

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      loadingText.style.display = 'none';

      const map = L.map('map').setView([lat, lng], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup("📍 You're here!")
        .openPopup();
    },
    function () {
      loadingText.innerText = "Could not get your location 😢";
    }
  );
} else {
  loadingText.innerText = "Geolocation is not supported by your browser.";
}
