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
		window.document.documentElement.scrollTop = 0;
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'block';
		document.getElementById("iconBackHome").style.display = 'none';
		document.getElementById("indexImages").style.display = 'flex';
		document.querySelector('body').classList.remove('no-scroll');
		articlesClose();
		document.getElementById("articlesBoxContainer").style.display = 'none';
}backHome();

function worksOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 1;
		window.document.documentElement.scrollTop = 0;
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.getElementById("indexImages").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}worksOpen();


function graphicOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 2;
		window.document.documentElement.scrollTop = 0;
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.getElementById("indexImages").style.display = 'none';
		document.querySelector('body').classList.remove('no-scroll');
}graphicOpen()

function articlesOpen(){
		iconMenuOpenMode = 1;
		iconUpwardMode = 1;
		menuBoxMode = 0;
		pages = 3;
		window.document.documentElement.scrollTop = 0;
		document.getElementById("menuBox").style.display = 'none';
		document.getElementById("menuBar").style.display = 'none';
		document.getElementById("iconBackHome").style.display = 'block';
		document.querySelector('body').classList.remove('no-scroll');
		document.getElementById("indexImages").style.display = 'none';
		document.getElementById("articlesBoxContainer").style.display = 'flex';
		articlesClose();
}articlesOpen()

function articlesClose(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'flex';
		document.getElementById("articlesContainer").style.display = 'none';
		document.getElementById("articles01").style.display = 'none';
		document.getElementById("articles02").style.display = 'none';
		document.getElementById("articles03").style.display = 'none';
		document.getElementById("articles04").style.display = 'none';
		document.getElementById("articles05").style.display = 'none';
		document.getElementById("articles06").style.display = 'none';
		document.getElementById("articles07").style.display = 'none';
		document.getElementById("articles08").style.display = 'none';
}articlesClose()

function articlesBox01(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles01").style.display = 'block';
}articlesBox01()

function articlesBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles02").style.display = 'block';
}articlesBox02()

function articlesBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles03").style.display = 'block';
}articlesBox03()

function articlesBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles04").style.display = 'block';
}articlesBox04()

function articlesBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles05").style.display = 'block';
}articlesBox05()

function articlesBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles06").style.display = 'block';
}articlesBox06()

function articlesBox07(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles07").style.display = 'block';
}articlesBox07()

function articlesBox08(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBoxContainer").style.display = 'none';
		document.getElementById("articlesContainer").style.display = 'flex';
		document.getElementById("articles08").style.display = 'block';
}articlesBox08()