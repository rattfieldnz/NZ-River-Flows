var greenMarker = 'resources/images/location-pin-green.png';
var redMarker = 'resources/images/location-pin-red.png';

var rivers = [];

function river(title, lat, lng, zIndex, marker, url, grade, river, region, /*lowerBound, upperBound, currentFlow*/){
		this.title = title;
		this.lat = lat;
		this.lng = lng;
		this.zIndex = zIndex;
		this.marker = marker;
		this.url = url;
		this.grade = grade;
		this.river = river;
		this.region = region;
		rivers.push(this);
}

var upperTaieri = new river("Upper Taieri", -45.649560, 170.276538, 2, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/sutton-to-hindon', 4, 'Taieri', 'Otago');
var lowerTaieri = new river("Lower Taieri", -45.792323, 170.309228, 2, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/taioma-to-outram', 3, 'Taieri', 'Otago');
var leith = new river("Leith", -45.864321, 170.514365, 1, redMarker, 'http://rivers.org.nz/nz/otago/leith-stream/leith', 3, 'Water of the Leith', 'Otago');
var upperHawea = new river("Upper Hawea", -44.637029, 169.248425, 1, redMarker, 'http://rivers.org.nz/nz/otago/hawea/control-gates-to-camp-hill-road', 2, 'Hawea', 'Otago');
var lowerHawea = new river("Lower Hawea", -44.667902, 169.226727, 1, redMarker, 'http://rivers.org.nz/nz/otago/hawea/camp-hill-road-to-albert-town', 2, 'Hawea', 'Otago');
var roaringMeg = new river("Roaring Meg", -45.001828, 169.070665, 2, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/roaring-meg', 3, 'Kawarau', 'Otago');
var dogleg = new river("Dogleg", -45.017332, 168.952476, 2, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/dogleg', 3, 'Kawarau', 'Otago');
var nevisBluff = new river("Nevis Bluff", -45.036366, 169.002423, 2, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/nevis-bluff', 5, 'Kawarau', 'Otago');
var citroen = new river("Citroen", -45.054224, 169.047425, 2, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/citro%C3%ABn', 4, 'Kawarau', 'Otago');
var leeStream = new river("Lee Stream", -45.797872, 170.227388, 1, redMarker, 'http://rivers.org.nz/nz/otago/lee-stream/lee-stream', 4, 'Lee Stream', 'Otago');
var manuherikia = new river("Manuherikia", -45.130542, 169.556783, 1, redMarker, 'http://rivers.org.nz/nz/otago/manuherikia/ophir-bridge-to-keddell-road', 4, 'Manuherikia', 'Otago');
var matukituki = new river("Matukituki", -44.506098, 168.728064, 2, greenMarker, 'http://rivers.org.nz/nz/otago/matukituki/rob-roy-stream-to-raspberry-creek', 3, 'Matukituki', 'Otago');
var nevisRiver = new river("Nevis River", -45.079093, 169.023634, 1, redMarker, 'http://rivers.org.nz/nz/otago/nevis/nevis-crossing-to-kawarau-river', 5, 'Nevis', 'Otago');
var lowerShotover = new river("Lower Shotover", -44.962026, 168.650360, 1, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/deep-creek-to-edith-cavell-bridge', 4, 'Shotover', 'Otago');
var middleShotover = new river("Middle Shotover", -44.879175, 168.676419, 1, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/macleods-to-skippers-bridge', 2, 'Shotover', 'Otago');
var lowerWaipori = new river("Lower Waipori", -45.929381, 170.041661, 1, redMarker, 'http://rivers.org.nz/nz/otago/waipori', 3, 'Waipori', 'Otago');

function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

rivers.sort(compare);

// Define Map Properties
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: -40.834541, lng: 173.473535},
		draggableCursor: 'auto',
		draggingCursor: 'crosshair',
		streetViewControl: false
	});
	setMarkers(map);
	
	if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			zoom(pos, false);
		});
	}
}

function zoom(pos, fromSearch){
	map.setCenter(pos)
	if(fromSearch){
		map.setZoom(12);
	} else {
		map.setZoom(8);
	}
}
		
// Add Interactive River Markers to Map
function setMarkers(map){
	
	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
			
	for(var i = 0; i < rivers.length; i++){
		
		// places markers
		var river = rivers[i];
		var zIndex = 0;
		
		if(river.marker == "greenMarker"){
			zIndex = 1;
		} else {
			zIndex = 2;
		}
		
		var marker = new google.maps.Marker({	
			position: {lat: river.lat, lng: river.lng},
			map: map,
			icon: river.marker,
			shape: shape,
			zIndex: river.zIndex,
			url: river.url,
		});
		
		// Opens marker tooltip on mouseover
		var content = "<h4>" + river.title + "</h4>";
		content += "<p>Grade " + river.grade + "</p>";
		
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'mouseover', (function(marker ,content ,infowindow){ 
			return function() {
				addInfoWindow(marker, content);
			};
		})(marker, content, infowindow));
	}
}

function addInfoWindow(marker, content){
	
	// Adds infowindow
	var infowindow = new google.maps.InfoWindow({
		disableAutoPan: true
	});
	
	infowindow.setContent(content);
	infowindow.open(map, marker);
	
	// Closes Infowindow
	google.maps.event.addListener(marker, 'mouseout', (function(marker, infowindow){ 
		return function() {
			infowindow.close()
		};
	})(marker, infowindow));
	
	// Hyperlink to rivers.org.nz on click
	google.maps.event.addListener(marker, 'click', function() {
		window.location.href = this.url;
	});
}