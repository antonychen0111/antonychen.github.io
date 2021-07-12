window.onload = setTimeout (function inloading(){
	document.getElementById("loadingbackground").style.display = 'none';
	document.getElementById("loadingbar").style.display = 'none';
	document.getElementById("loadingline").style.display = 'none';
	document.querySelector("html").style.overflowY= 'scroll';
	},1000);

function topdisplay() {
	if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
		document.getElementById("icon").style.display = 'block';
	} else {
		document.getElementById("icon").style.display = 'none';
	}
}

setInterval(topdisplay, 100);

window.onscroll = function(){
	document.getElementById("info").style.zIndex = -1;
}

function infoup(){
	document.getElementById("info").style.zIndex = 3;
}

function totop(){
	window.document.documentElement.scrollTop = 0;
}