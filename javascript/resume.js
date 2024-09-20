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

// 複製按鈕
function iconCopy(){
		navigator.clipboard.writeText("antony90011199@gmail.com"); // 電子信箱地址
		alert("已複製 Copied the text: " + "antony90011199@gmail.com"); // 已複製提醒
}