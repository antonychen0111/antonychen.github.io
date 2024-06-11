// JavaScript Document

window.onload = setTimeout( function(){
	
	document.getElementById("loadingBackground").style.display = 'none';
	document.getElementById("loadingBar").style.display = 'none';
	document.getElementById("loadingLine").style.display = 'none';
	document.querySelector("html").style.overflowY= 'scroll';
	
	} ,1000)

function menuOpenDisplay() {
	if (window.pageYOffset > 300) {
		
		document.getElementById("iconMenuOpen").style.display = 'block';
		
	} else {
		
		document.getElementById("iconMenuOpen").style.display = 'none';
		
	}
}

setInterval(menuOpenDisplay, 100);

function toTopDisplay() {
	if (window.pageYOffset > 100) {
		
		document.getElementById("iconUpward").style.display = 'block';

	} else {
		
		document.getElementById("iconUpward").style.display = 'none';
		
	}
}

setInterval(toTopDisplay, 100);

function menuOpen(){
	
		document.getElementById("menuBox").style.display = 'block';
		document.getElementById("iconMenuClose").style.display = 'block';
	
}

function menuClose(){
	
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("iconMenuClose").style.display = 'none';
	
}

function toTop(){
	
		window.document.documentElement.scrollTop = 0;
	
}

window.onscroll = function(){
	
		document.getElementById("infoBox").style.zIndex = -1;
		document.getElementById("infoBox").style.opacity = 0.5;
	
}

function infoUp(){
	
		document.getElementById("infoBox").style.zIndex = 3;
		document.getElementById("infoBox").style.opacity = 1;
	
}

//function createBox(){
//
//var box = "";
//for (var i = 0; i < 10; i++) {
//    box += '<div id="inbox">';
//	box += '<div class="pic"><img src="./works/pic/'+(1+i)+'.jpg" width="100%"></div>';
//	box += '   <div class="description">';
//	box += '       <p>'+'<iframe frameborder=0 src="works/text/'+(1+i)+'.txt"></iframe>'+'</p>';
//	box += '   </div>';
//    box += '</div>';
//}
//document.getElementById("box").innerHTML = box;
//}