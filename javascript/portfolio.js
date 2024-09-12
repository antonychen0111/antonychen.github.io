// JavaScript Document

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
		document.querySelector("body").classList.add("no-scroll"); // 禁止滾動
		document.getElementById("pagesBoxBackground").style.display = "flex"; // 彈窗背景顯示
		document.getElementById("pagesBox").style.display = "flex"; // 彈窗開啟
		document.getElementById("iconPortfolioClosePages").style.display = "flex"; // 彈窗按鈕顯示
		document.getElementById("portfolioIconContainerContainer").style.display = "none"; // 按鈕隱藏
		document.getElementById("pagesTitleContainerContainer").style.display = "flex"; // 作品集標題顯示
}

// 頁面彈窗關閉
function portfolioPagesClose(){
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
		document.getElementById("pagesBoxBackground").style.display = "none"; // 彈窗背景隱藏
		document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
		document.getElementById("pagesTitleContainerContainer").style.display = "none"; // 作品集標題隱藏
}

// 頁面前後按鈕

var pages = 1; // 頁數

function portfolioNext(){
	if (pages < 34){
		pages ++;
	}else if (pages == 34){
		pages = 1;
	}
}

function portfolioPrevious(){
		if (pages > 1){
		pages --;
	}else if (pages == 1){
		pages = 34;
	}
}

// 頁面前後切換

var portfolioNextPages = document.getElementById("iconPortfolioNext");
var portfolioPreviousPages = document.getElementById("iconPortfolioPrevious");

	portfolioNextPages.addEventListener("click", function (){
	if (pages == 1){
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_About.webp" loading="lazy" alt="">';
	}else if (pages == 2) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Sound Truck of Democracy 01.webp" loading="lazy" alt="">';
	}else if (pages == 3) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 01.webp" loading="lazy" alt="">';
	}else if (pages == 4) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 02.webp" loading="lazy" alt="">';
	}else if (pages == 5) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Streets in Taiwan 01.webp" loading="lazy" alt="">';
	}else if (pages == 6) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NON DIZZY MAN 01.webp" loading="lazy" alt="">';
	}else if (pages == 7) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Three Shorts Room at Night 01.webp" loading="lazy" alt="">';
	}else if (pages == 8) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Feng Shui 01.webp" loading="lazy" alt="">';
	}else if (pages == 9) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Running Dot 01.webp" loading="lazy" alt="">';
	}else if (pages == 10) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_3D Works Collection 01.webp" loading="lazy" alt="">';
	}else if (pages == 11) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 01.webp" loading="lazy" alt="">';
	}else if (pages == 12) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 02.webp" loading="lazy" alt="">';
	}else if (pages == 13) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 03.webp" loading="lazy" alt="">';
	}else if (pages == 14) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 01.webp" loading="lazy" alt="">';
	}else if (pages == 15) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 02.webp" loading="lazy" alt="">';
	}else if (pages == 16) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 01.webp" loading="lazy" alt="">';
	}else if (pages == 17) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 02.webp" loading="lazy" alt="">';
	}else if (pages == 18) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 01.webp" loading="lazy" alt="">';
	}else if (pages == 19) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 02.webp" loading="lazy" alt="">';
	}else if (pages == 20) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 01.webp" loading="lazy" alt="">';
	}else if (pages == 21) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 02.webp" loading="lazy" alt="">';
	}else if (pages == 22) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 01.webp" loading="lazy" alt="">';
	}else if (pages == 23) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 02.webp" loading="lazy" alt="">';
	}else if (pages == 24) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Orientation Camp 01.webp" loading="lazy" alt="">';
	}else if (pages == 25) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 01.webp" loading="lazy" alt="">';
	}else if (pages == 26) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 02.webp" loading="lazy" alt="">';
	}else if (pages == 27) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Doraemon Font 01.webp" loading="lazy" alt="">';
	}else if (pages == 28) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 01.webp" loading="lazy" alt="">';
	}else if (pages == 29) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 02.webp" loading="lazy" alt="">';
	}else if (pages == 30) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 03.webp" loading="lazy" alt="">';
	}else if (pages == 31) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS 2019 Yearbook\'s Cover Design 01.webp" loading="lazy" alt="">';
	}else if (pages == 32) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS 80th & 81st Anniversary Sweatshirt and T-shirt 01.webp" loading="lazy" alt="">';
	}else if (pages == 33) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 01.webp" loading="lazy" alt="">';
	}else if (pages == 34) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 02.webp" loading="lazy" alt="">';
	}
}, false);

	portfolioPreviousPages.addEventListener("click", function (){
	if (pages == 1){
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_About.webp" loading="lazy" alt="">';
	}else if (pages == 2) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Sound Truck of Democracy 01.webp" loading="lazy" alt="">';
	}else if (pages == 3) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 01.webp" loading="lazy" alt="">';
	}else if (pages == 4) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 02.webp" loading="lazy" alt="">';
	}else if (pages == 5) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Streets in Taiwan 01.webp" loading="lazy" alt="">';
	}else if (pages == 6) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NON DIZZY MAN 01.webp" loading="lazy" alt="">';
	}else if (pages == 7) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Three Shorts Room at Night 01.webp" loading="lazy" alt="">';
	}else if (pages == 8) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Feng Shui 01.webp" loading="lazy" alt="">';
	}else if (pages == 9) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Running Dot 01.webp" loading="lazy" alt="">';
	}else if (pages == 10) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_3D Works Collection 01.webp" loading="lazy" alt="">';
	}else if (pages == 11) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 01.webp" loading="lazy" alt="">';
	}else if (pages == 12) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 02.webp" loading="lazy" alt="">';
	}else if (pages == 13) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 03.webp" loading="lazy" alt="">';
	}else if (pages == 14) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 01.webp" loading="lazy" alt="">';
	}else if (pages == 15) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 02.webp" loading="lazy" alt="">';
	}else if (pages == 16) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 01.webp" loading="lazy" alt="">';
	}else if (pages == 17) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 02.webp" loading="lazy" alt="">';
	}else if (pages == 18) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 01.webp" loading="lazy" alt="">';
	}else if (pages == 19) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 02.webp" loading="lazy" alt="">';
	}else if (pages == 20) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 01.webp" loading="lazy" alt="">';
	}else if (pages == 21) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 02.webp" loading="lazy" alt="">';
	}else if (pages == 22) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 01.webp" loading="lazy" alt="">';
	}else if (pages == 23) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 02.webp" loading="lazy" alt="">';
	}else if (pages == 24) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Orientation Camp 01.webp" loading="lazy" alt="">';
	}else if (pages == 25) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 01.webp" loading="lazy" alt="">';
	}else if (pages == 26) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 02.webp" loading="lazy" alt="">';
	}else if (pages == 27) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Doraemon Font 01.webp" loading="lazy" alt="">';
	}else if (pages == 28) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 01.webp" loading="lazy" alt="">';
	}else if (pages == 29) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 02.webp" loading="lazy" alt="">';
	}else if (pages == 30) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_Thought Crime 03.webp" loading="lazy" alt="">';
	}else if (pages == 31) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS 2019 Yearbook\'s Cover Design 01.webp" loading="lazy" alt="">';
	}else if (pages == 32) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS 80th & 81st Anniversary Sweatshirt and T-shirt 01.webp" loading="lazy" alt="">';
	}else if (pages == 33) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 01.webp" loading="lazy" alt="">';
	}else if (pages == 34) {
		document.getElementById("portfolioContainer").innerHTML =
		'<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 02.webp" loading="lazy" alt="">';
	}
}, false);

// 頁面彈窗跳轉

function pagesBox01(){
	pages = 1;
	document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
	document.getElementById("pagesBoxBackground").style.display = "none"; // 彈窗背景隱藏
	document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
	document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
	document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
	document.getElementById("pagesTitleContainerContainer").style.display = "none"; // 作品集標題隱藏
}

function pagesBox02(){
	pages = 2;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox03(){
	pages = 3;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox04(){
	pages = 4;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox05(){
	pages = 5;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox06(){
	pages = 6;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox07(){
	pages = 7;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox08(){
	pages = 8;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox09(){
	pages = 9;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox10(){
	pages = 10;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox11(){
	pages = 11;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox12(){
	pages = 12;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox13(){
	pages = 13;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox14(){
	pages = 14;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox15(){
	pages = 15;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox16(){
	pages = 16;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox17(){
	pages = 17;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox18(){
	pages = 18;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox19(){
	pages = 19;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox20(){
	pages = 20;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox21(){
	pages = 21;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox22(){
	pages = 22;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox23(){
	pages = 23;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox24(){
	pages = 24;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox25(){
	pages = 25;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox26(){
	pages = 26;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox27(){
	pages = 27;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox28(){
	pages = 28;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox29(){
	pages = 29;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox30(){
	pages = 30;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox31(){
	pages = 31;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox32(){
	pages = 32;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox33(){
	pages = 33;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

function pagesBox34(){
	pages = 34;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
}

// 頁面彈窗跳轉手機版

function pagesBoxMobile01(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages01").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile02(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages02").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile03(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages03").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile04(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages04").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile05(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages05").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile06(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages06").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile07(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages07").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile08(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages08").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile09(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages09").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile10(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages10").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile11(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages11").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile12(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages12").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile13(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages13").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile14(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages14").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile15(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages15").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile16(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages16").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile17(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages17").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile18(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages18").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile19(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages19").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile20(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages20").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile21(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages21").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile22(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages22").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile23(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages23").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile24(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages24").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile25(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages25").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile26(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages26").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile27(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages27").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile28(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages28").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile29(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages29").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile30(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages30").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile31(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages31").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile32(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages32").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile33(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages33").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile34(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages34").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile35(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages35").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile36(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages36").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile37(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages37").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile38(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages38").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile39(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages39").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile40(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages40").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile41(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages41").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile42(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages42").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile43(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages43").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile44(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages44").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile45(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages45").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile46(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages46").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile47(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages47").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile48(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages48").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile49(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages49").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile50(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages50").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile51(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages51").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile52(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages52").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile53(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages53").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile54(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages54").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile55(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages55").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile56(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages56").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile57(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages57").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile58(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages58").scrollIntoView({behavior: "smooth", block: "center"});
}

function pagesBoxMobile59(){
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("pages59").scrollIntoView({behavior: "smooth", block: "center"});
}