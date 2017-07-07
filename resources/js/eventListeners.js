
renderRiverList();

document.getElementById('item').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
});

var searchValue = "";
document.getElementById('item').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	searchValue += String.fromCharCode(key);
	if(key == 8){
		searchValue = searchValue.substring(0, searchValue.length - 2);
	}
	
	clearList();
	for(var i = 0; i < rivers.length; i++){
		if(rivers[i][0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1){
			var pos = {
				lat: rivers[i][1],
				lng: rivers[i][2]
			}
			addItemToList(rivers[i][0], pos);
		}
	}
});

document.getElementById('searchButton').addEventListener('click', function(){
	zoomOnSearch();
});

document.getElementById('item').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // enter
      zoomOnSearch();
    }
});

document.getElementById('titlePage').addEventListener('click', function(){
	window.location.href = 'file:///C:/Users/Fergus/Documents/PaddleSoftware/Development/NZRiverFlows.html';
});

document.getElementById('flowIcon').addEventListener('click', function(){
	window.location.href = 'file:///C:/Users/Fergus/Documents/PaddleSoftware/Development/NZRiverFlows.html';
});

function zoomOnSearch(){
	var searchValue = document.getElementById('item').value;
	if(searchValue) {
		var numberReturned = 0;
		var lt = 0;
		var ln = 0;
		for(var i = 0; i < rivers.length; i++){
			if(rivers[i][0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1){
				lt = rivers[i][1];
				ln = rivers[i][2];
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
		var pos = {
			lat: rivers[i][1],
			lng: rivers[i][2]
		};
		addItemToList(rivers[i][0], pos);
	}
}

function addItemToList(river, pos){
	var list = document.getElementById('riverList');
	
	var item = document.createElement('li');
	item.innerText = river;
	
	item.addEventListener('click', function(){
		zoom(pos, true);
	});
	item.addEventListener('mouseover', function(){
		// info windows
		addInfoWindow(pos, river);
	});
	
	list.appendChild(item);
}

function clearList(){
	var list = document.getElementById('riverList');
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}