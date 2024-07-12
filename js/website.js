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
window.onload = function() {
    setTimeout( function() {
        window.document.documentElement.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    }, 1);
    setTimeout( function() {
        document.body.style.overflow = 'visible';
        document.querySelector("html").style.overflowY = 'scroll';
        document.getElementById("loadingBar").style.display = 'none';
    }, 1000);
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
		document.getElementById("indexImagesContainerContainer1").style.display = 'flex';
		document.getElementById("indexImagesContainerContainer2").style.display = 'none';
	}else if (Math.abs(indexImages) %2 == 0){
		document.getElementById("indexImagesContainerContainer1").style.display = 'none';
		document.getElementById("indexImagesContainerContainer2").style.display = 'flex';
	}
}, 500);

// 菜單按鈕
setInterval( function iconMenuOpen(){
	if (window.pageYOffset > 320 && pages == 0 && iconMenuOpenMode == 1){ // 滾動高度 + 首頁 + 按鈕顯示
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (pages > 0 && iconMenuOpenMode == 1 && menuBoxMode == 0){ // 非首頁 + 菜單彈窗關閉
		document.getElementById("iconMenuOpen").style.display = 'block';
	}else if (iconMenuOpenMode == 0) { // 按鈕隱藏
		document.getElementById("iconMenuOpen").style.display = 'none';
	}else {
		document.getElementById("iconMenuOpen").style.display = 'none';
	}
}, 500);

// 回到頂端按鈕
setInterval( function iconToTop(){
	if (window.pageYOffset > 100 && iconUpwardMode == 1) { // 滾動高度 + 按鈕顯示
		document.getElementById("iconUpward").style.display = 'block';
	}else if (window.pageYOffset > 100 && iconUpwardMode == 0){ // 滾動高度 + 按鈕隱藏
		document.getElementById("iconUpward").style.display = 'none';
	}else {
		document.getElementById("iconUpward").style.display = 'none';
	}
}, 500);

// 回到頂端高度
function toTop(){
		window.document.documentElement.scrollTop = 0;
}

// 菜單彈窗開啟
function menuOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		menuBoxMode = 1; // 菜單彈窗開啟
		
		document.getElementById("menuBox").style.display = 'block'; // 彈窗開啟
		document.getElementById("menuBar").style.display = 'none'; // 菜單欄隱藏
		document.getElementById("iconMenuClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}

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
}

// 關於彈窗開啟
function aboutOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("aboutBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconAboutClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}

// 關於彈窗關閉
function aboutClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("aboutBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconAboutClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
}

// 聯繫彈窗開啟
function contactOpen(){
		iconMenuOpenMode = 0; // 菜單按鈕隱藏
		iconUpwardMode = 0; // 回到頂端按鈕隱藏
		
		document.getElementById("contactBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconContactClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}

// 聯繫彈窗關閉
function contactClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("contactBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconContactClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
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
		
		document.getElementById("termsBox").style.display = 'flex'; // 彈窗開啟
		document.getElementById("iconTermsClose").style.display = 'block'; // 彈窗按鈕顯示
		document.querySelector('body').classList.add('no-scroll'); // 禁止滾動
}

// 條款彈窗關閉
function termsClose(){
		iconMenuOpenMode = 1; // 菜單按鈕顯示
		iconUpwardMode = 1; // 回到頂端按鈕顯示
		
		document.getElementById("termsBox").style.display = 'none'; // 彈窗關閉
		document.getElementById("iconTermsClose").style.display = 'none'; // 彈窗按鈕隱藏
		document.querySelector('body').classList.remove('no-scroll'); // 允許滾動
}