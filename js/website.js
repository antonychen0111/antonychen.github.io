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

window.onload = setTimeout( function() {
        window.document.documentElement.scrollTop = 0;
        document.body.style.overflow = "hidden";
    }, 1);

window.onload = setTimeout( function() {
        document.body.style.overflow = "visible";
        document.querySelector("html").style.overflowY = "scroll";
        document.getElementById("loadingBar").style.display = "none";
    }, 1000);

// 菜單按鈕
setInterval( function iconMenuOpen(){
	if (window.pageYOffset > 320 && pages == 0 && iconMenuOpenMode == 1){ // 滾動高度 + 首頁 + 按鈕顯示
		document.getElementById("iconMenuOpen").style.display = "block";
	}else if (pages > 0 && iconMenuOpenMode == 1 && menuBoxMode == 0){ // 非首頁 + 菜單彈窗關閉
		document.getElementById("iconMenuOpen").style.display = "block";
	}else if (iconMenuOpenMode == 0) { // 按鈕隱藏
		document.getElementById("iconMenuOpen").style.display = "none";
	}else {
		document.getElementById("iconMenuOpen").style.display = "none";
	}
}, 100);

// 回到頂端按鈕
setInterval( function iconToTop(){
	if (window.pageYOffset > 100 && iconUpwardMode == 1) { // 滾動高度 + 按鈕顯示
		document.getElementById("iconUpward").style.display = "block";
	}else if (window.pageYOffset > 100 && iconUpwardMode == 0){ // 滾動高度 + 按鈕隱藏
		document.getElementById("iconUpward").style.display = "none";
	}else {
		document.getElementById("iconUpward").style.display = "none";
	}
}, 100);

// 回到頂端高度
function toTop(){
		window.document.documentElement.scrollTop = 0;
}

// 首頁圖前後按鈕
function indexImagesNext(){
		indexImages ++;
}

function indexImagesPrevious(){
		indexImages --;
}

// 首頁圖切換
setInterval( function indexImagesChange(){
	if (Math.abs(indexImages) %2 == 1){
		document.getElementById("indexImagesContainerContainer1").style.display = "flex";
		document.getElementById("indexImagesContainerContainer2").style.display = "none";
	}else if (Math.abs(indexImages) %2 == 0){
		document.getElementById("indexImagesContainerContainer1").style.display = "none";
		document.getElementById("indexImagesContainerContainer2").style.display = "flex";
	}
}, 100);

// 菜單彈窗開啟
function menuOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		menuBoxMode = 1; // 菜單彈窗開啟
		
		document.getElementById("menuBox").style.display = "block"; // 彈窗開啟
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconMenuClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 菜單彈窗關閉
function menuClose(){
	if (pages == 0) { // 首頁
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		
		document.getElementById("menuBox").style.display = "none"; // 彈窗關閉
		document.getElementById("menuBar").style.display = "block"; // 菜單欄顯示
		document.getElementById("iconMenuClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
	}else if (pages > 0){ // 非首頁
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1 // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		
		document.getElementById("menuBox").style.display = "none"; // 彈窗關閉
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconMenuClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
	}
}

// 關於彈窗開啟
function aboutOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("aboutBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconAboutClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 關於彈窗關閉
function aboutClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("aboutBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconAboutClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 聯繫彈窗開啟
function contactOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("contactBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconContactClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 聯繫彈窗關閉
function contactClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("contactBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconContactClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 複製按鈕
function iconCopy(){
		navigator.clipboard.writeText("antony90011199@gmail.com"); // 電子信箱地址
		alert("已複製 Copied the text: " + "antony90011199@gmail.com"); // 已複製提醒
}

// 條款彈窗開啟
function termsOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("termsBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconTermsClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 條款彈窗關閉
function termsClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("termsBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconTermsClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 暫停重載所有影片
//function pauseAndReloadVideo(){
//		document.querySelectorAll('.worksImagesCover').pause();
//		document.querySelectorAll('worksImagesContainer').pause();
//		document.querySelectorAll('.worksImagesCover').load();
//		document.querySelectorAll('worksImagesContainer').load();
//}

// 作品內容關閉
function worksAllClose(){
		document.getElementById("works").style.display = "none"; // 作品內容關閉
		document.getElementById("works01").style.display = "none"; // 作品內容關閉
		document.getElementById("works02").style.display = "none";
		document.getElementById("works03").style.display = "none";
}

// 作品內容關閉
function graphicAllClose(){
		document.getElementById("graphic").style.display = "none"; // 作品內容關閉
		document.getElementById("graphic01").style.display = "none"; // 作品內容關閉
		document.getElementById("graphic02").style.display = "none";
		document.getElementById("graphic03").style.display = "none";
		document.getElementById("graphic04").style.display = "none";
		document.getElementById("graphic05").style.display = "none";
		document.getElementById("graphic06").style.display = "none";
		document.getElementById("graphic07").style.display = "none";
		document.getElementById("graphic08").style.display = "none";
}

// 文章內容關閉
function articlesAllClose(){
		document.getElementById("articles").style.display = "none"; // 文章內容關閉
		document.getElementById("articles01").style.display = "none"; // 文章內容關閉
		document.getElementById("articles02").style.display = "none";
		document.getElementById("articles03").style.display = "none";
		document.getElementById("articles04").style.display = "none";
		document.getElementById("articles05").style.display = "none";
		document.getElementById("articles06").style.display = "none";
		document.getElementById("articles07").style.display = "none";
		document.getElementById("articles08").style.display = "none";
}

// 回到首頁
function backHome(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 0; // 首頁
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = "none"; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = "block"; // 菜單欄顯示
		document.getElementById("iconBackHome").style.display = "none"; // 首頁按鈕隱藏
		document.getElementById("indexImages").style.display = "flex"; // 首頁圖顯示
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
//		pauseAndReloadVideo(); // 暫停重載所有影片
		
		document.getElementById("worksBox").style.display = "none"; // 作品列表關閉
		document.getElementById("graphicBox").style.display = "none"; // 作品列表關閉
		document.getElementById("articlesBox").style.display = "none"; // 文章列表關閉
		worksAllClose(); // 作品內容關閉
		graphicAllClose(); // 作品內容關閉
		articlesAllClose(); // 文章內容關閉
}

// 開啟作品列表
function worksOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 1; // 3D Works
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = "none"; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = "block"; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = "none"; // 首頁圖隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
//		pauseAndReloadVideo(); // 暫停重載所有影片
		
		document.getElementById("worksBox").style.display = "flex"; // 作品列表開啟
		document.getElementById("graphicBox").style.display = "none"; // 作品列表關閉
		document.getElementById("articlesBox").style.display = "none"; // 文章列表關閉
		worksAllClose(); // 作品內容關閉
		graphicAllClose(); // 作品內容關閉
		articlesAllClose(); // 文章內容關閉
}

// 回到作品列表
function worksClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("worksBox").style.display = "flex"; // 作品列表開啟
//		pauseAndReloadVideo(); // 暫停重載所有影片
		worksAllClose(); // 作品內容關閉
}

// 作品內容

function worksBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("worksBox").style.display = "none"; // 作品列表關閉
		document.getElementById("works").style.display = "flex"; // 作品內容開啟
		document.getElementById("works01").style.display = "block"; // 作品內容開啟
}

function worksBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works02").style.display = "block";
}

function worksBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works03").style.display = "block";
}

function worksBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works04").style.display = "block";
}

function worksBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works05").style.display = "block";
}

function worksBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works06").style.display = "block";
}

function worksBox07(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works07").style.display = "block";
}

function worksBox08(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works08").style.display = "block";
}

function worksBox09(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works09").style.display = "block";
}

function worksBox10(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works10").style.display = "block";
}

function worksBox11(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works11").style.display = "block";
}

function worksBox12(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works12").style.display = "block";
}

function worksBox13(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works13").style.display = "block";
}

function worksBox14(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works14").style.display = "block";
}

function worksBox15(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works15").style.display = "block";
}

function worksBox16(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("worksBox").style.display = "none";
		document.getElementById("works").style.display = "flex";
		document.getElementById("works16").style.display = "block";
}

// 開啟作品列表
function graphicOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 2; // Graphic Arts
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = "none"; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = "block"; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = "none"; // 首頁圖隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
//		pauseAndReloadVideo(); // 暫停重載所有影片
		
		document.getElementById("worksBox").style.display = "none"; // 作品列表關閉
		document.getElementById("graphicBox").style.display = "flex"; // 作品列表開啟
		document.getElementById("articlesBox").style.display = "none"; // 文章列表關閉
		worksAllClose(); // 作品內容關閉
		graphicAllClose(); // 作品內容關閉
		articlesAllClose(); // 文章內容關閉
}

// 回到作品列表
function graphicClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("graphicBox").style.display = "flex"; // 作品列表開啟
//		pauseAndReloadVideo(); // 暫停重載所有影片
		graphicAllClose(); // 作品內容關閉
}

// 作品內容

function graphicBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("graphicBox").style.display = "none"; // 作品列表關閉
		document.getElementById("graphic").style.display = "flex"; // 作品內容開啟
		document.getElementById("graphic01").style.display = "block"; // 作品內容開啟
}

function graphicBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic02").style.display = "block";
}

function graphicBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic03").style.display = "block";
}

function graphicBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic04").style.display = "block";
}

function graphicBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic05").style.display = "block";
}

function graphicBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic06").style.display = "block";
}

function graphicBox07(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic07").style.display = "block";
}

function graphicBox08(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic08").style.display = "block";
}

function graphicBox09(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic09").style.display = "block";
}

function graphicBox10(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic10").style.display = "block";
}

function graphicBox11(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic11").style.display = "block";
}

function graphicBox12(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic12").style.display = "block";
}

function graphicBox13(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic13").style.display = "block";
}

function graphicBox14(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic14").style.display = "block";
}

function graphicBox15(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic15").style.display = "block";
}

function graphicBox16(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic16").style.display = "block";
}

function graphicBox17(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("graphicBox").style.display = "none";
		document.getElementById("graphic").style.display = "flex";
		document.getElementById("graphic17").style.display = "block";
}

// 開啟文章列表
function articlesOpen(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		menuBoxMode = 0; // 菜單彈窗關閉
		pages = 3; // Articles
		
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("menuBox").style.display = "none"; // 菜單彈窗關閉
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconBackHome").style.display = "block"; // 首頁按鈕顯示
		document.getElementById("indexImages").style.display = "none"; // 首頁圖隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
//		pauseAndReloadVideo(); // 暫停重載所有影片
		
		document.getElementById("worksBox").style.display = "none"; // 作品列表關閉
		document.getElementById("graphicBox").style.display = "none"; // 作品列表關閉
		document.getElementById("articlesBox").style.display = "flex"; // 文章列表開啟
		worksAllClose(); // 作品內容關閉
		graphicAllClose(); // 作品內容關閉
		articlesAllClose(); // 文章內容關閉
}

// 回到文章列表
function articlesClose(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("articlesBox").style.display = "flex"; // 文章列表開啟
//		pauseAndReloadVideo(); // 暫停重載所有影片
		articlesAllClose(); // 文章內容關閉
}

// 文章內容

function articlesBox01(){
		window.document.documentElement.scrollTop = 0; // 回到頂端
		document.getElementById("articlesBox").style.display = "none"; // 文章列表關閉
		document.getElementById("articles").style.display = "flex"; // 文章內容開啟
		document.getElementById("articles01").style.display = "block"; // 文章內容開啟
}

function articlesBox02(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles02").style.display = "block";
}

function articlesBox03(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles03").style.display = "block";
}

function articlesBox04(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles04").style.display = "block";
}

function articlesBox05(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles05").style.display = "block";
}

function articlesBox06(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles06").style.display = "block";
}

function articlesBox07(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles07").style.display = "block";
}

function articlesBox08(){
		window.document.documentElement.scrollTop = 0;
		document.getElementById("articlesBox").style.display = "none";
		document.getElementById("articles").style.display = "flex";
		document.getElementById("articles08").style.display = "block";
}