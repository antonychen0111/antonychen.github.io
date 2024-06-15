// JavaScript Document

	var host = "antonychen.work";
	if ((host == window.location.host) && (window.location.protocol != "https:"))
		window.location.protocol = "https";

window.onload = setTimeout( function(){
	
	document.getElementById("loading").style.display = 'none';
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

function toTop(){
		
		window.document.documentElement.scrollTop = 0;
		
}

setInterval(toTopDisplay, 100);

function menuOpen(){
		
		document.getElementById("menuBox").style.display = 'block';
		document.getElementById("iconMenuClose").style.display = 'block';
		document.body.style.overflow = 'hidden';
		
}

function menuClose(){
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("iconMenuClose").style.display = 'none';
		document.body.style.overflow = 'visible';
		
}

function aboutOpen(){
		
		document.getElementById("aboutBackground").style.display = 'flex';
		document.getElementById("iconAboutClose").style.display = 'block';
		document.body.style.overflow = 'hidden';
		
}

function aboutClose(){
		
		document.getElementById("aboutBackground").style.display = 'none';
		document.getElementById("iconAboutClose").style.display = 'none';
		document.body.style.overflow = 'visible';
		
}

function contectOpen(){
		
		document.getElementById("contectBackground").style.display = 'flex';
		document.getElementById("iconAboutClose").style.display = 'block';
		document.body.style.overflow = 'hidden';
		
}

function contectClose(){
		
		document.getElementById("contectBackground").style.display = 'none';
		document.getElementById("iconAboutClose").style.display = 'none';
		document.body.style.overflow = 'visible';
		
}
//
//function createBox(){
//
//var box = "";
//for (var i = 0; i < 10; i++) {
//    box += '<div class="inbox">';
//	box += '<div class="pic"><img src="./works/pic/'+(1+i)+'.jpg" width="100%"></div>';
//	box += '   <div class="boxDescription">';
//	box += '       <p>'+'<iframe frameborder=0 src="works/text/'+(1+i)+'.txt"></iframe>'+'</p>';
//	box += '   </div>';
//    box += '</div>';
//}
//document.getElementById("box").innerHTML = box;
//}