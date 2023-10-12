// JavaScript Document

window.onload = setTimeout( function(){
	document.getElementById("loadingbackground").style.display = 'none';
	document.getElementById("loadingbar").style.display = 'none';
	document.getElementById("loadingline").style.display = 'none';
	document.querySelector("html").style.overflowY= 'scroll';
	} ,1000)

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
	document.getElementById("info").style.opacity = 0.5;
}

function infoup(){
	document.getElementById("info").style.zIndex = 3;
	document.getElementById("info").style.opacity = 1;
}

function totop(){
	window.document.documentElement.scrollTop = 0;
}

function createbox(){

var box = "";
for (var i = 0; i < 10; i++) {
    box += '<div id="inbox">';
	box += '<div class="pic"><img src="./works/pic/'+(1+i)+'.jpg" width="100%"></div>';
	box += '   <div class="description">';
	box += '       <p>'+'<iframe frameborder=0 src="works/text/'+(1+i)+'.txt"></iframe>'+'</p>';
	box += '   </div>';
    box += '</div>';
}
document.getElementById("box").innerHTML = box;
}