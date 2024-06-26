// JavaScript Document

	var iconMenuOpenMode = 1;
	var iconUpwardMode = 1;
	var pages = 0;
	var menuBoxMode = 0;

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
	if (window.pageYOffset > 320 && pages == 0 && iconMenuOpenMode == 1){
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (pages > 0 && iconMenuOpenMode == 1 && menuBoxMode == 0){
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (iconMenuOpenMode == 0) {
		document.getElementById("iconMenuOpen").style.display = 'none';
	}else {
		document.getElementById("iconMenuOpen").style.display = 'none';
	}
}setInterval(iconMenuOpen, 100);

function iconToTop() {
	if (window.pageYOffset > 100 && iconUpwardMode == 1) {
		document.getElementById("iconUpward").style.display = 'block';
	}else if (window.pageYOffset > 100 && iconUpwardMode == 0){
		document.getElementById("iconUpward").style.display = 'none';
	}else {
		document.getElementById("iconUpward").style.display = 'none';
	}
}setInterval(iconToTop, 100);

function toTop(){
		window.document.documentElement.scrollTop = 0;
}toTop()

function menuOpen(){
		iconMenuOpenMode = 0;
		iconUpwardMode = 0;
		menuBoxMode = 1;
		
		document.getElementById("menuBox").style.display = 'block';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconMenuClose").style.display = 'block';
		document.querySelector('body').classList.add('no-scroll');
}menuOpen()

function menuClose(){
	if (pages == 0) {
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'block';
		document.getElementById("iconMenuClose").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
	} else if (pages > 0){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1
		menuBoxMode = 0;
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconMenuClose").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
	}
}menuClose()

function aboutOpen(){
		iconMenuOpenMode = 0;
		iconUpwardMode = 0;
		
		document.getElementById("aboutBox").style.display = 'flex';
		document.getElementById("iconAboutClose").style.display = 'block';
		document.querySelector('body').classList.add('no-scroll');
}aboutOpen()

function aboutClose(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		
		document.getElementById("aboutBox").style.display = 'none';
		document.getElementById("iconAboutClose").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}aboutClose()

function contactOpen(){
		iconMenuOpenMode = 0;
		iconUpwardMode = 0;
		
		document.getElementById("contactBox").style.display = 'flex';
		document.getElementById("iconContactClose").style.display = 'block';
		document.querySelector('body').classList.add('no-scroll');
}contactOpen()

function contactClose(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		
		document.getElementById("contactBox").style.display = 'none';
		document.getElementById("iconContactClose").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}contactClose()

function iconCopy(){
		navigator.clipboard.writeText("antony90011199@gmail.com");
		alert("已複製 Copied the text: " + "antony90011199@gmail.com");
}iconCopy()

function termsOpen(){
		iconMenuOpenMode = 0;
		iconUpwardMode = 0;
		
		document.getElementById("termsBox").style.display = 'flex';
		document.getElementById("iconTermsClose").style.display = 'block';
		document.querySelector('body').classList.add('no-scroll');
}termsOpen()

function termsClose(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		
		document.getElementById("termsBox").style.display = 'none';
		document.getElementById("iconTermsClose").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}termsClose()

function backHome(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 0;
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'block';
		document.getElementById("iconBackHome").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}backHome();

function worksOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 1;

		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.querySelector('body').classList.remove('no-scroll');
}worksOpen();


function graphicOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 2;
		
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.querySelector('body').classList.remove('no-scroll');
}graphicOpen()

function articlesOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 3;

		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.querySelector('body').classList.remove('no-scroll');
}articlesOpen()