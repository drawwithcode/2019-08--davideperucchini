var myMap;
var myLocation;
var canvas;

var mappa = new Mappa('Leaflet');

var stadiumLat = 41.0801724;
var stadiumLng = 28.7678664;


options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var carnevale = {
	lat: stadiumLat,
	lng: stadiumLng,
	name: 'ChampionsLeagueFinal2020',
}

function preload(){
  myLocation = getCurrentPosition();
}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLocation.latitude;
  options.lng = myLocation.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


}


function draw() {
 textFont("Helvetica");
  clear();
  //
  var ataturkStadium = calcGeoDistance(myLocation.latitude, myLocation.longitude, stadiumLat, stadiumLng, "km");
  fill(255);
  textSize(14);
  var pointStadium = myMap.latLngToPixel(stadiumLat, stadiumLng);

  //
  fill("#F8F9FC")
  rect(0,0,windowWidth,108);

  //
  noStroke();
  fill("#000000");
  textAlign(LEFT,CENTER)
  textSize(36);
  text('You are ' + Math.round(ataturkStadium) + ' km far from the Champions League Final 2020' , 50, 50);

  //
  fill("#000000");
  stroke(1);
  strokeWeight(3);
  textSize(24);
  var pointHere = myMap.latLngToPixel(myLocation.latitude, myLocation.longitude);

  push();
  stroke(1);
  strokeWeight(3);
  line(pointHere.x, pointHere.y, pointStadium.x, pointStadium.y);
  pop();
  fill("#FFC857");
  ellipse(pointHere.x, pointHere.y, 20);
  fill("#E5446D");
  ellipse(pointStadium.x, pointStadium.y, 20);


  fill("#FFC857");
  stroke(10);
  text('You', pointHere.x-25, pointHere.y-20);

  fill("#E5446D");
  stroke(10);
  text('Champions League Final 2020', pointStadium.x-5, pointStadium.y+25);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
