
  function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    dark.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    var dropDownBtn = document.querySelector('.dropbtn');
    var dropDownContent = document.querySelector('.dropdown-content');
  
    dropDownBtn.addEventListener('click', function() {
      if (dropDownContent.style.display === 'block') {
        dropDownContent.style.display = 'none';
      } else {
        dropDownContent.style.display = 'block';
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".mobile-menu li");
  
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.stopPropagation();
        item.classList.toggle("open");
      });
    });
  
    document.addEventListener("click", function() {
      menuItems.forEach(function(item) {
        item.classList.remove("open");
      });
    });
  });

  
  var map;
  var directionsService;
  var directionsRenderer;
  var destinationMarker;
  var autocomplete;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: { lat: 48.876876, lng: 2.295019 } // Coordonnées de la 70 rue Mademoiselle
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
      panel: document.getElementById('steps')
    });

   
  }

  function calculateRoute(travelMode) {
    var start = document.getElementById('start').value;
    var destination = '70 rue Mademoiselle, Paris';

    var request = {
      origin: start,
      destination: destination,
      travelMode: travelMode
    };

    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
        // Récupérer les coordonnées de destination
        var destinationLocation = response.routes[0].legs[0].end_location;
        // Créer un marqueur pour la destination
        destinationMarker = new google.maps.Marker({
          position: destinationLocation,
          map: map
        });
        // Centrer la carte sur le marqueur de destination
        map.setCenter(destinationMarker.getPosition());
        map.setZoom(15);
      } else {
        alert('Impossible de calculer l\'itinéraire. Veuillez vérifier l\'adresse de départ.');
      }
    });


          }
          var map;
          var directionsService;
          var directionsRenderer;
          var destinationMarker;
          var autocomplete;
        
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              zoom: 13,
              center: { lat: 48.876876, lng: 2.295019 } // Coordonnées de la 70 rue Mademoiselle
            });
        
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer({
              map: map,
              panel: document.getElementById('steps')
            });
        
           
          }
          
          function calculateRoute(travelMode) {
            var start = document.getElementById('start').value;
            var destination = '70 rue Mademoiselle, Paris';
        
            var request = {
              origin: start,
              destination: destination,
              travelMode: travelMode
            };
        
            directionsService.route(request, function(response, status) {
              if (status == 'OK') {
                directionsRenderer.setDirections(response);
                // Récupérer les coordonnées de destination
                var destinationLocation = response.routes[0].legs[0].end_location;
                // Créer un marqueur pour la destination
                destinationMarker = new google.maps.Marker({
                  position: destinationLocation,
                  map: map
                });
                // Centrer la carte sur le marqueur de destination
                map.setCenter(destinationMarker.getPosition());
                map.setZoom(15);
              } else {
                alert('Impossible de calculer l\'itinéraire. Veuillez vérifier l\'adresse de départ.');
              }
            });
        
        
                  }