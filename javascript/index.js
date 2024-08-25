// JavaScript Document

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
	if (window.pageYOffset > 320) { // 滾動高度按鈕顯示
		document.getElementById("iconMenuOpen").style.display = "block";
	}else {
		document.getElementById("iconMenuOpen").style.display = "none";
	}
}, 100);

// 回到頂端按鈕
setInterval( function iconToTop(){
	if (window.pageYOffset > 100 || document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { // 滾動高度按鈕顯示
		document.getElementById("iconUpward").style.display = "block";
	}else {
		document.getElementById("iconUpward").style.display = "none";
	}
}, 100);

// 回到頂端高度
function toTop(){
		window.pageYOffset = 0;
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
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
		document.getElementById("menuBox").style.display = "block"; // 彈窗開啟
		document.getElementById("menuBar").style.display = "none"; // 菜單欄隱藏
		document.getElementById("iconMenuOpen").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("iconMenuClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 菜單彈窗關閉
function menuClose(){
		document.getElementById("menuBox").style.display = "none"; // 彈窗關閉
		document.getElementById("menuBar").style.display = "block"; // 菜單欄顯示
		document.getElementById("iconMenuOpen").style.display = "block"; // 彈窗按鈕顯示
		document.getElementById("iconMenuClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 關於彈窗開啟
function aboutOpen(){
		document.getElementById("aboutBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconAboutClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 關於彈窗關閉
function aboutClose(){
		document.getElementById("aboutBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconAboutClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 聯繫彈窗開啟
function contactOpen(){
		document.getElementById("contactBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconContactClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 聯繫彈窗關閉
function contactClose(){
		document.getElementById("contactBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconContactClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 條款彈窗開啟
function termsOpen(){
		document.getElementById("termsBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconTermsClose").style.display = "block"; // 彈窗按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 條款彈窗關閉
function termsClose(){
		document.getElementById("termsBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconTermsClose").style.display = "none"; // 彈窗按鈕隱藏
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 複製按鈕
function iconCopy(){
		navigator.clipboard.writeText("antony90011199@gmail.com"); // 電子信箱地址
		alert("已複製 Copied the text: " + "antony90011199@gmail.com"); // 已複製提醒
}