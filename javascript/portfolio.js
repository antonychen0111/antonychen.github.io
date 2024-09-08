// JavaScript Document

	var pages = 1; // 頁數

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

// 頁面彈窗開啟
function portfolioPagesOpen(){
		document.getElementById("pagesBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconPortfolioClosePages").style.display = "flex"; // 彈窗按鈕顯示
		document.getElementById("portfolioIconContainerContainer").style.display = "none"; // 按鈕隱藏
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
}

// 頁面彈窗關閉
function portfolioPagesClose(){
		document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

// 頁面前後按鈕
function portfolioNext(){
	if (pages < 2){
		pages ++;
	}else if (pages == 2){
		pages = 1;
	}
}

function portfolioPrevious(){
		if (pages > 1){
		pages --;
	}else if (pages == 1){
		pages = 2;
	}
}

// 頁面前後切換
setInterval( function portfolioPagesChange(){
	if (pages == 1){
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/about.webp" loading="lazy" alt="">';
	}else if (pages == 2){
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/Sound Truck of Democracy 01.webp" loading="lazy" alt="">';
	}
}, 100);

// 頁面彈窗跳轉

function pagesBox01(){
	pages = 1;
	document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
	document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
	document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
	document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
}

function pagesBox02(){
	pages = 2;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
}

// 頁面彈窗跳轉手機版

function pagesBoxMobile01(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages01").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile02(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages02").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile03(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages03").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile04(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages04").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile05(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages05").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile06(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages06").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile07(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages07").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile08(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages08").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile09(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages09").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile10(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages10").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile11(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages11").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile12(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages12").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile13(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages13").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile14(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages14").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile15(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages15").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile16(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages16").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile17(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages17").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile18(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages18").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile19(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages19").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile20(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages20").scrollIntoView({behavior: "smooth", block: "center"});
}