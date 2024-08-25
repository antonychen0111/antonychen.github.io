// JavaScript Document

	// 轉址到 https:
	var host = "antonychen.work";
	if ((host == window.location.host) && (window.location.protocol != "https:")){
		window.location.protocol = "https";
	}

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

// 菜單彈窗開啟
function menuOpen(){
		document.getElementById("menuBox").style.display = "block"; // 彈窗開啟
		document.getElementById("iconMenuOpen").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("iconMenuClose").style.display = "block"; // 彈窗按鈕顯示
		document.getElementById("iconBackHome").style.display = "block"; // 首頁按鈕顯示
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 菜單彈窗關閉
function menuClose(){
		document.getElementById("menuBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconMenuOpen").style.display = "block"; // 彈窗按鈕顯示
		document.getElementById("iconMenuClose").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("iconBackHome").style.display = "block"; // 首頁按鈕隱藏
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