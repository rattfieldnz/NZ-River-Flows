
var linkSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve"><g><g><path d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361 c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414 c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418 h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563 c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542 c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13 c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57 C397.709,293.209,395.519,292.354,392.857,292.354z"/><path d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424 c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067 c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852 s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426 c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"/></g></g></svg>'

renderRiverList();

document.getElementById('item').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
});

document.getElementById('searchButton').addEventListener('click', function(){
	zoomOnSearch();
});

document.getElementById('item').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      zoomOnSearch();
    }
});

document.getElementById('titlePage').addEventListener('click', function(){
	location.reload();
	document.getElementById('item').value = "";
});

document.getElementById('flowIcon').addEventListener('click', function(){
	location.reload();
	document.getElementById('item').value = "";
});

function searchList(field) {
	console.log(field.value);
	clearList();
	
	for(var i = 0; i < rivers.length; i++){
		var river = rivers[i];
		if((river.title.toLowerCase().indexOf(field.value.toLowerCase()) != -1) || (river.river.toLowerCase().indexOf(field.value.toLowerCase()) != -1)){
			var linkTo = river.url;
			var pos = {
				lat: river.lat,
				lng: river.lng
			}
			addItemToList(river.title, pos, linkTo);
		}
	}
}

function zoomOnSearch(){
	var searchValue = document.getElementById('item').value;
	if(searchValue) {
		var numberReturned = 0;
		var lt = 0;
		var ln = 0;
		for(var i = 0; i < rivers.length; i++){
			var river = rivers[i];
			if(river.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1){
				lt = river.lat;
				ln = river.lng;
				numberReturned++;
			}
		}
		if(numberReturned == 1){
			var pos = {
				lat: lt,
				lng: ln
			};
			zoom(pos, true);
		}
	}
};

function renderRiverList() {
	for(var i = 0; i < rivers.length; i++){
		var river = rivers[i];
		var linkTo = river.url;
		var pos = {
			lat: river.lat,
			lng: river.lng
		};
		addItemToList(river.title, pos, linkTo);
	}
}

function addItemToList(river, pos, linkTo){
	
	var list = document.getElementById('riverList');
	
	var item = document.createElement('li');
	item.innerText = river;
	
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	
	var linkIcon = document.createElement('button');
	linkIcon.classList.add('linkIcon');
	linkIcon.innerHTML = linkSVG;
	
	buttons.appendChild(linkIcon);
	
	item.addEventListener('click', function(){
		openInfoWindow(river, pos, true);
		zoom(pos, true);
	});
	
	item.addEventListener('mouseover', function(){
		openInfoWindow(river, pos, false);
	});
	
	linkIcon.addEventListener('click', function(){
		window.location.href = linkTo;
	});
	
	item.appendChild(buttons);
	list.appendChild(item);
}

function openInfoWindow(content, position, fromZoom){
	var infowindow = new google.maps.InfoWindow();
	infowindow.setContent(content);
	infowindow.setPosition(position);
	infowindow.open(map);
	
	if(!fromZoom){
		document.getElementById('riverList').addEventListener('mouseout', (function(position, infowindow){ 
			return function() {
				infowindow.close()
			};
		})(position, infowindow));
	}
}

function clearList(){
	var list = document.getElementById('riverList');
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}