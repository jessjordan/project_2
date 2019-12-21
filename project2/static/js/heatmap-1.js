var myMap = L.map("map", {
  center: [39.809860, -98.555183],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Contributors: I. Aguirre, A. Brown, and J. Jordan",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);

//var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";
var url = "beer.json";

d3.json(url, function(response) {

  //console.log(response);

  var heatArray = [];


  response.features.forEach((d,i)=>{

    var location = d.geometry
    console.log(location)
      if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }  
    
  })

  // for (var i = 0; i < response.length; i++) {
  //   if(i>100) break;

  //   var location = response[i].location.geometry;
    
  //   console.log(location)
  //   if (location) {
  //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
  //   }
  // }

  var heat = L.heatLayer(heatArray, {
    radius: 9,
    blur: 10,
    maxZoom: .05
  }).addTo(myMap);

});
