// Creating map object
var myMap = L.map("map", {
  center: [39.809860, -98.555183],
  zoom: 5

});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Contributors: I. Aguirre, A. Brown, and J. Jordan",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

//Retrieve data from json file
var url ="data/beer.json"

// Grab the data with d3
d3.json(url, function(response) {


  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  response.features.forEach((d,i)=>{
   
    var location = d.geometry
    console.log(location)
      if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup("<h4><br>Brewery Name:</br></h4>" + d.properties.name_breweries
         + "<h4><br>Style:</br></h4>" + d.properties.style_name
          + "<h4><br>Category:</br></h4>" +d.properties.cat_name
          + "<h4><br>City and State<br></h4>" + d.properties.city
          + ", " + d.properties.state));
    }  
    
  })

  myMap.addLayer(markers);

});
