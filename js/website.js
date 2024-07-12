// JavaScript Document

	var iconMenuOpenMode = 1; // 菜單按鈕：1 = 顯示 ; 0 = 隱藏
	var iconUpwardMode = 1; // 回到頂端按鈕：1 = 顯示 ; 0 = 隱藏
	var pages = 0; // 0 = 首頁 ; 1 = 3D Works ; 2 = Graphic Arts ; 3 = Contact
	var menuBoxMode = 0; // 菜單彈窗：1 = 顯示 ; 0 = 隱藏

	var indexImages = 1; // 首頁圖前後按鈕

	// 轉址到 https:
	var host = "antonychen.work";
	if ((host == window.location.host) && (window.location.protocol != "https:")){
		window.location.protocol = "https";
	}

// 載入網站進度條
window.onload = setTimeout( function(){
	window.document.documentElement.scrollTop = 0;
	document.body.style.overflow = 'hidden';
},1)

window.onload = setTimeout( function(){
	document.body.style.overflow = 'visible';
	document.querySelector("html").style.overflowY= 'scroll';
	document.getElementById("loadingBar").style.display = 'none';
},1000)

// 首頁圖前後按鈕
function indexImagesNext(){
		indexImages ++;
}indexImagesNext()

function indexImagesPrevious(){
		indexImages --;
}indexImagesPrevious()

// 首頁圖切換
function indexImagesChange(){
	if (Math.abs(indexImages) %2 == 1){
		document.getElementById("indexImagesContainerContainer1").style.display = 'flex';
		document.getElementById("indexImagesContainerContainer2").style.display = 'none';
	}else if (Math.abs(indexImages) %2 == 0){
		document.getElementById("indexImagesContainerContainer1").style.display = 'none';
		document.getElementById("indexImagesContainerContainer2").style.display = 'flex';
	}
}setInterval(indexImagesChange, 100);

// 菜單按鈕
function iconMenuOpen(){
	if (window.pageYOffset > 320 && pages == 0 && iconMenuOpenMode == 1){ // 滾動高度 + 首頁 + 按鈕顯示
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (pages > 0 && iconMenuOpenMode == 1 && menuBoxMode == 0){ // 非首頁 + 菜單彈窗關閉
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (iconMenuOpenMode == 0) { // 按鈕隱藏
		document.getElementById("iconMenuOpen").style.display = 'none';
	}else {
		document.getElementById("iconMenuOpen").style.display = 'none';
	}
}setInterval(iconMenuOpen, 100);

// 回到頂端按鈕
function iconToTop(){
	if (window.pageYOffset > 100 && iconUpwardMode == 1) { // 滾動高度 + 按鈕顯示
		document.getElementById("iconUpward").style.display = 'block';
	}else if (window.pageYOffset > 100 && iconUpwardMode == 0){ // 滾動高度 + 按鈕隱藏
		document.getElementById("iconUpward").style.display = 'none';
	}else {
		document.getElementById("iconUpward").style.display = 'none';
	}
}setInterval(iconToTop, 100);

// 回到頂端高度
function toTop(){
		window.document.documentElement.scrollTop = 0;
}toTop()

// 菜單彈窗開啟
function menuOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		menuBoxMode = 1; // 菜單彈窗開啟
		
		document.getElementById("menuBox").style.display = 'block'; // 彈窗開啟
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconMenuClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}menuOpen()

// 菜單彈窗關閉
function menuClose(){
	if (pages == 0) { // 首頁
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		
		document.getElementById("menuBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("menuBar").style.display = 'block'; // 菜單欄顯示
		document.getElementById("iconMenuClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
	}else if (pages > 0){ // 非首頁
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1 // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		
		document.getElementById("menuBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconMenuClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
	}
}menuClose()

// 關於彈窗開啟
function aboutOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("aboutBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconAboutClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}aboutOpen()

// 關於彈窗關閉
function aboutClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("aboutBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconAboutClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
}aboutClose()

// 聯繫彈窗開啟
function contactOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("contactBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconContactClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}contactOpen()

// 聯繫彈窗關閉
function contactClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("contactBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconContactClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
}contactClose()

// 複製按鈕
function iconCopy(){
		navigator.clipboard.writeText("antony90011199@gmail.com"); // 電子信箱地址
		alert("已複製 Copied the text: " + "antony90011199@gmail.com"); // 已複製提醒
}iconCopy()

// 條款彈窗開啟
function termsOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("termsBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconTermsClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}termsOpen()

// 條款彈窗關閉
function termsClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("termsBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconTermsClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
}termsClose()

function backHome(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 0; // 首頁
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = 'none'; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = 'block'; // 菜單欄顯示
		document.getElementById("iconBackHome").style.display = 'none'; // 首頁按鈕隱藏
		document.getElementById("indexImages").style.display = 'flex'; // 首頁圖顯示
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
		worksClose(); // 作品內容關閉
		graphicClose(); // 作品內容關閉
		articlesClose(); // 文章內文關閉
		document.getElementById("worksBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("graphicBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("articlesBox").style.display = 'none'; // 文章列表關閉
}backHome()

function worksOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 1; // 3D Works
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = 'none'; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = 'block'; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = 'none'; // 首頁圖隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
		document.getElementById("worksBox").style.display = 'flex'; // 作品列表開啟
		worksClose(); // 作品內容關閉
		graphicClose(); // 作品內容關閉
		articlesClose(); // 文章內文關閉
		document.getElementById("graphicBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("articlesBox").style.display = 'none'; // 文章列表關閉
}worksOpen()

function worksClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("worksBox").style.display = 'flex'; // 作品列表開啟
		document.getElementById("works").style.display = 'none'; // 作品內容關閉
		document.getElementById("works01").style.display = 'none'; // 作品內容關閉
		document.getElementById("works02").style.display = 'none';
		document.getElementById("works03").style.display = 'none';
}worksClose()

function worksBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("worksBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("works").style.display = 'flex'; // 作品內容開啟
		document.getElementById("works01").style.display = 'block'; // 作品內容開啟
}worksBox01()

function worksBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = 'none';
		document.getElementById("works").style.display = 'flex';
		document.getElementById("works02").style.display = 'block';
}worksBox02()

function worksBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = 'none';
		document.getElementById("works").style.display = 'flex';
		document.getElementById("works03").style.display = 'block';
}worksBox03()

function worksBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = 'none';
		document.getElementById("works").style.display = 'flex';
		document.getElementById("works04").style.display = 'block';
}worksBox04()

function worksBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = 'none';
		document.getElementById("works").style.display = 'flex';
		document.getElementById("works05").style.display = 'block';
}worksBox05()

function worksBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = 'none';
		document.getElementById("works").style.display = 'flex';
		document.getElementById("works06").style.display = 'block';
}worksBox06()

function graphicOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 2; // Graphic Arts
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = 'none'; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = 'block'; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = 'none'; // 首頁圖隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
		document.getElementById("graphicBox").style.display = 'flex'; // 作品列表開啟
		graphicClose(); // 作品內容關閉
		worksClose(); // 作品內容關閉
		articlesClose(); // 文章內文關閉
		document.getElementById("worksBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("articlesBox").style.display = 'none'; // 文章列表關閉
}graphicOpen()


function graphicClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("graphicBox").style.display = 'flex'; // 作品列表開啟
		document.getElementById("graphic").style.display = 'none'; // 作品內容關閉
		document.getElementById("graphic01").style.display = 'none'; // 作品內容關閉
		document.getElementById("graphic02").style.display = 'none';
		document.getElementById("graphic03").style.display = 'none';
		document.getElementById("graphic04").style.display = 'none';
}graphicClose()

function graphicBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("graphicBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("graphic").style.display = 'flex'; // 作品內容開啟
		document.getElementById("graphic01").style.display = 'block'; // 作品內容開啟
}graphicBox01()

function graphicBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = 'none';
		document.getElementById("graphic").style.display = 'flex';
		document.getElementById("graphic02").style.display = 'block';
}graphicBox02()

function graphicBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = 'none';
		document.getElementById("graphic").style.display = 'flex';
		document.getElementById("graphic03").style.display = 'block';
}graphicBox03()

function graphicBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = 'none';
		document.getElementById("graphic").style.display = 'flex';
		document.getElementById("graphic04").style.display = 'block';
}graphicBox04()

function graphicBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = 'none';
		document.getElementById("graphic").style.display = 'flex';
		document.getElementById("graphic05").style.display = 'block';
}graphicBox05()

function graphicBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = 'none';
		document.getElementById("graphic").style.display = 'flex';
		document.getElementById("graphic06").style.display = 'block';
}graphicBox06()

function articlesOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 3; // Articles
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = 'none'; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = 'block'; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = 'none'; // 首頁圖隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
		document.getElementById("articlesBox").style.display = 'flex'; // 作品列表開啟
		articlesClose(); // 作品內容關閉
		worksClose(); // 作品內容關閉
		graphicClose(); // 文章內文關閉
		document.getElementById("worksBox").style.display = 'none'; // 作品列表關閉
		document.getElementById("graphicBox").style.display = 'none'; // 作品列表關閉
}articlesOpen()

function articlesClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("articlesBox").style.display = 'flex'; // 文章列表開啟
		document.getElementById("articles").style.display = 'none'; // 文章內容關閉
		document.getElementById("articles01").style.display = 'none'; // 文章內容關閉
		document.getElementById("articles02").style.display = 'none';
		document.getElementById("articles03").style.display = 'none';
		document.getElementById("articles04").style.display = 'none';
		document.getElementById("articles05").style.display = 'none';
		document.getElementById("articles06").style.display = 'none';
		document.getElementById("articles07").style.display = 'none';
		document.getElementById("articles08").style.display = 'none';
}articlesClose()

function articlesBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("articlesBox").style.display = 'none'; // 文章列表關閉
		document.getElementById("articles").style.display = 'flex'; // 文章內容開啟
		document.getElementById("articles01").style.display = 'block'; // 文章內容開啟
}articlesBox01()

function articlesBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles02").style.display = 'block';
}articlesBox02()

function articlesBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles03").style.display = 'block';
}articlesBox03()

function articlesBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles04").style.display = 'block';
}articlesBox04()

function articlesBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles05").style.display = 'block';
}articlesBox05()

function articlesBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles06").style.display = 'block';
}articlesBox06()

function articlesBox07(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles07").style.display = 'block';
}articlesBox07()

function articlesBox08(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = 'none';
		document.getElementById("articles").style.display = 'flex';
		document.getElementById("articles08").style.display = 'block';
}articlesBox08()