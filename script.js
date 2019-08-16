"use strict";


document.getElementById('headerButton').onclick = function() {
	if (getComputedStyle(document.getElementById('headerList')).display === "none") {
		return document.getElementById('headerList').style.display = "flex";
	}
	if (getComputedStyle(document.getElementById('headerList')).display === "flex") {
		return document.getElementById('headerList').style.display = "none";
	}
};



window.onresize = function () {
	if (document.getElementsByClassName('container')[0].offsetWidth > 540){
		return document.getElementById('headerList').style.display = "flex";
	}
	else {
		return document.getElementById('headerList').style.display = "none";
	}

};