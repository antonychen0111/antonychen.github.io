// JavaScript Document

	var host = "antonychen.work";
	if ((host == window.location.host) && (window.location.protocol != "https:"))
		window.location.protocol = "https";


window.onload = setTimeout( function(){
	
	window.document.documentElement.scrollTop = 0;
	document.body.style.overflow = 'hidden';
	
	} ,1)

window.onload = setTimeout( function(){
	
	document.querySelector("html").style.overflowY= 'scroll';
	document.body.style.overflow = 'visible';
	document.getElementById("loadingBar").style.display = 'none';
	
	} ,1000)

function iconMenuOpen() {
	
	if (window.pageYOffset > 320) {
		
		document.getElementById("iconMenuOpen").style.display = 'block';
		
	} else {
		
		document.getElementById("iconMenuOpen").style.display = 'none';
		
	}
}

setInterval(iconMenuOpen, 100);

function iconToTop() {
	
	if (window.pageYOffset > 100) {
		
		document.getElementById("iconUpward").style.display = 'block';
		
	} else {
		
		document.getElementById("iconUpward").style.display = 'none';
		
	}
}

setInterval(iconToTop, 100);

function toTop(){
		
		window.document.documentElement.scrollTop = 0;
		
}

function menuOpen(){
		
		document.getElementById("menuBox").style.display = 'block';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconMenuClose").style.display = 'block';
		
}

function menuClose(){
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'block';
		document.getElementById("iconMenuClose").style.display = 'none';
		
}

function aboutOpen(){
		
		document.getElementById("aboutBox").style.display = 'flex';
		document.getElementById("iconAboutClose").style.display = 'block';
		
}

function aboutClose(){
		
		document.getElementById("aboutBox").style.display = 'none';
		document.getElementById("iconAboutClose").style.display = 'none';
		
}

function contectOpen(){
		
		document.getElementById("contectBox").style.display = 'flex';
		document.getElementById("iconContectClose").style.display = 'block';
		
}

function contectClose(){
		
		document.getElementById("contectBox").style.display = 'none';
		document.getElementById("iconContectClose").style.display = 'none';
		
}

function iconCopy(){
		
		navigator.clipboard.writeText("antony90011199@gmail.com");
		alert("已複製 Copied the text: " + "antony90011199@gmail.com");
}

function termsOpen(){
		
		document.getElementById("termsBox").style.display = 'flex';
		document.getElementById("iconTermsClose").style.display = 'block';
		
}

function termsClose(){
		
		document.getElementById("termsBox").style.display = 'none';
		document.getElementById("iconTermsClose").style.display = 'none';
		
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