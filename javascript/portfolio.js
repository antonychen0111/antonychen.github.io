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

// 頁面切換

var portfolioNextPages = document.getElementById("iconPortfolioNext");
var portfolioPreviousPages = document.getElementById("iconPortfolioPrevious");

var pages01 = '<img src="portfolio/A4/portfolio_A4_About.webp" loading="lazy" alt="">';
var pages02 = '<img src="portfolio/A4/portfolio_A4_Sound Truck of Democracy 01.webp" loading="lazy" alt="">';
var pages03 = '<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 01.webp" loading="lazy" alt="">';
var pages04 = '<img src="portfolio/A4/portfolio_A4_Transfer to the Taxi 02.webp" loading="lazy" alt="">';
var pages05 = '<img src="portfolio/A4/portfolio_A4_Streets in Taiwan 01.webp" loading="lazy" alt="">';
var pages06 = '<img src="portfolio/A4/portfolio_A4_NON DIZZY MAN 01.webp" loading="lazy" alt="">';
var pages07 = '<img src="portfolio/A4/portfolio_A4_Three Shorts Room at Night 01.webp" loading="lazy" alt="">';
var pages08 = '<img src="portfolio/A4/portfolio_A4_Feng Shui 01.webp" loading="lazy" alt="">';
var pages09 = '<img src="portfolio/A4/portfolio_A4_Running Dot 01.webp" loading="lazy" alt="">';
var pages10 = '<img src="portfolio/A4/portfolio_A4_3D Works Collection 01.webp" loading="lazy" alt="">';
var pages11 = '<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 01.webp" loading="lazy" alt="">';
var pages12 = '<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 02.webp" loading="lazy" alt="">';
var pages13 = '<img src="portfolio/A4/portfolio_A4_Uân-liû Native Languages Music Festival 03.webp" loading="lazy" alt="">';
var pages14 = '<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 01.webp" loading="lazy" alt="">';
var pages15 = '<img src="portfolio/A4/portfolio_A4_Political Cartoon about Taiwan\'s Legislative Yuan 02.webp" loading="lazy" alt="">';
var pages16 = '<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 01.webp" loading="lazy" alt="">';
var pages17 = '<img src="portfolio/A4/portfolio_A4_Big Brother Xi is Watching You 02.webp" loading="lazy" alt="">';
var pages18 = '<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 01.webp" loading="lazy" alt="">';
var pages19 = '<img src="portfolio/A4/portfolio_A4_Chinese Taipei People 02.webp" loading="lazy" alt="">';
var pages20 = '<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 01.webp" loading="lazy" alt="">';
var pages21 = '<img src="portfolio/A4/portfolio_A4_Global Anti-Totalitarianism March Taiwan 02.webp" loading="lazy" alt="">';
var pages22 = '<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 01.webp" loading="lazy" alt="">';
var pages23 = '<img src="portfolio/A4/portfolio_A4_17th Taiwan LGBT Pride 02.webp" loading="lazy" alt="">';
var pages24 = '<img src="portfolio/A4/portfolio_A4_NTUST TTDD Orientation Camp 01.webp" loading="lazy" alt="">';
var pages25 = '<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 01.webp" loading="lazy" alt="">';
var pages26 = '<img src="portfolio/A4/portfolio_A4_NTUST TTDD Freshman Week 02.webp" loading="lazy" alt="">';
var pages27 = '<img src="portfolio/A4/portfolio_A4_Doraemon Font 01.webp" loading="lazy" alt="">';
var pages28 = '<img src="portfolio/A4/portfolio_A4_Thought Crime 01.webp" loading="lazy" alt="">';
var pages29 = '<img src="portfolio/A4/portfolio_A4_Thought Crime 02.webp" loading="lazy" alt="">';
var pages30 = '<img src="portfolio/A4/portfolio_A4_Thought Crime 03.webp" loading="lazy" alt="">';
var pages31 = '<img src="portfolio/A4/portfolio_A4_TCIVS 2019 Yearbook\'s Cover Design 01.webp" loading="lazy" alt="">';
var pages32 = '<img src="portfolio/A4/portfolio_A4_TCIVS 80th & 81st Anniversary Sweatshirt and T-shirt 01.webp" loading="lazy" alt="">';
var pages33 = '<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 01.webp" loading="lazy" alt="">';
var pages34 = '<img src="portfolio/A4/portfolio_A4_TCIVS GAC Farewell Party 02.webp" loading="lazy" alt="">';

portfolioNextPages.addEventListener("click", function (){
	if (pages == 1){
		document.getElementById("portfolioContainer").innerHTML = pages01;
	}else if (pages == 2) {
		document.getElementById("portfolioContainer").innerHTML = pages02;
	}else if (pages == 3) {
		document.getElementById("portfolioContainer").innerHTML = pages03;
	}else if (pages == 4) {
		document.getElementById("portfolioContainer").innerHTML = pages04;
	}else if (pages == 5) {
		document.getElementById("portfolioContainer").innerHTML = pages05;
	}else if (pages == 6) {
		document.getElementById("portfolioContainer").innerHTML = pages06;
	}else if (pages == 7) {
		document.getElementById("portfolioContainer").innerHTML = pages07;
	}else if (pages == 8) {
		document.getElementById("portfolioContainer").innerHTML = pages08;
	}else if (pages == 9) {
		document.getElementById("portfolioContainer").innerHTML = pages09;
	}else if (pages == 10) {
		document.getElementById("portfolioContainer").innerHTML = pages10;
	}else if (pages == 11) {
		document.getElementById("portfolioContainer").innerHTML = pages11;
	}else if (pages == 12) {
		document.getElementById("portfolioContainer").innerHTML = pages12;
	}else if (pages == 13) {
		document.getElementById("portfolioContainer").innerHTML = pages13;
	}else if (pages == 14) {
		document.getElementById("portfolioContainer").innerHTML = pages14;
	}else if (pages == 15) {
		document.getElementById("portfolioContainer").innerHTML = pages15;
	}else if (pages == 16) {
		document.getElementById("portfolioContainer").innerHTML = pages16;
	}else if (pages == 17) {
		document.getElementById("portfolioContainer").innerHTML = pages17;
	}else if (pages == 18) {
		document.getElementById("portfolioContainer").innerHTML = pages18;
	}else if (pages == 19) {
		document.getElementById("portfolioContainer").innerHTML = pages19;
	}else if (pages == 20) {
		document.getElementById("portfolioContainer").innerHTML = pages20;
	}else if (pages == 21) {
		document.getElementById("portfolioContainer").innerHTML = pages21;
	}else if (pages == 22) {
		document.getElementById("portfolioContainer").innerHTML = pages22;
	}else if (pages == 23) {
		document.getElementById("portfolioContainer").innerHTML = pages23;
	}else if (pages == 24) {
		document.getElementById("portfolioContainer").innerHTML = pages24;
	}else if (pages == 25) {
		document.getElementById("portfolioContainer").innerHTML = pages25;
	}else if (pages == 26) {
		document.getElementById("portfolioContainer").innerHTML = pages26;
	}else if (pages == 27) {
		document.getElementById("portfolioContainer").innerHTML = pages27;
	}else if (pages == 28) {
		document.getElementById("portfolioContainer").innerHTML = pages28;
	}else if (pages == 29) {
		document.getElementById("portfolioContainer").innerHTML = pages29;
	}else if (pages == 30) {
		document.getElementById("portfolioContainer").innerHTML = pages30;
	}else if (pages == 31) {
		document.getElementById("portfolioContainer").innerHTML = pages31;
	}else if (pages == 32) {
		document.getElementById("portfolioContainer").innerHTML = pages32;
	}else if (pages == 33) {
		document.getElementById("portfolioContainer").innerHTML = pages33;
	}else if (pages == 34) {
		document.getElementById("portfolioContainer").innerHTML = pages34;
	}
}, false);

portfolioPreviousPages.addEventListener("click", function (){
	if (pages == 1){
		document.getElementById("portfolioContainer").innerHTML = pages01;
	}else if (pages == 2) {
		document.getElementById("portfolioContainer").innerHTML = pages02;
	}else if (pages == 3) {
		document.getElementById("portfolioContainer").innerHTML = pages03;
	}else if (pages == 4) {
		document.getElementById("portfolioContainer").innerHTML = pages04;
	}else if (pages == 5) {
		document.getElementById("portfolioContainer").innerHTML = pages05;
	}else if (pages == 6) {
		document.getElementById("portfolioContainer").innerHTML = pages06;
	}else if (pages == 7) {
		document.getElementById("portfolioContainer").innerHTML = pages07;
	}else if (pages == 8) {
		document.getElementById("portfolioContainer").innerHTML = pages08;
	}else if (pages == 9) {
		document.getElementById("portfolioContainer").innerHTML = pages09;
	}else if (pages == 10) {
		document.getElementById("portfolioContainer").innerHTML = pages10;
	}else if (pages == 11) {
		document.getElementById("portfolioContainer").innerHTML = pages11;
	}else if (pages == 12) {
		document.getElementById("portfolioContainer").innerHTML = pages12;
	}else if (pages == 13) {
		document.getElementById("portfolioContainer").innerHTML = pages13;
	}else if (pages == 14) {
		document.getElementById("portfolioContainer").innerHTML = pages14;
	}else if (pages == 15) {
		document.getElementById("portfolioContainer").innerHTML = pages15;
	}else if (pages == 16) {
		document.getElementById("portfolioContainer").innerHTML = pages16;
	}else if (pages == 17) {
		document.getElementById("portfolioContainer").innerHTML = pages17;
	}else if (pages == 18) {
		document.getElementById("portfolioContainer").innerHTML = pages18;
	}else if (pages == 19) {
		document.getElementById("portfolioContainer").innerHTML = pages19;
	}else if (pages == 20) {
		document.getElementById("portfolioContainer").innerHTML = pages20;
	}else if (pages == 21) {
		document.getElementById("portfolioContainer").innerHTML = pages21;
	}else if (pages == 22) {
		document.getElementById("portfolioContainer").innerHTML = pages22;
	}else if (pages == 23) {
		document.getElementById("portfolioContainer").innerHTML = pages23;
	}else if (pages == 24) {
		document.getElementById("portfolioContainer").innerHTML = pages24;
	}else if (pages == 25) {
		document.getElementById("portfolioContainer").innerHTML = pages25;
	}else if (pages == 26) {
		document.getElementById("portfolioContainer").innerHTML = pages26;
	}else if (pages == 27) {
		document.getElementById("portfolioContainer").innerHTML = pages27;
	}else if (pages == 28) {
		document.getElementById("portfolioContainer").innerHTML = pages28;
	}else if (pages == 29) {
		document.getElementById("portfolioContainer").innerHTML = pages29;
	}else if (pages == 30) {
		document.getElementById("portfolioContainer").innerHTML = pages30;
	}else if (pages == 31) {
		document.getElementById("portfolioContainer").innerHTML = pages31;
	}else if (pages == 32) {
		document.getElementById("portfolioContainer").innerHTML = pages32;
	}else if (pages == 33) {
		document.getElementById("portfolioContainer").innerHTML = pages33;
	}else if (pages == 34) {
		document.getElementById("portfolioContainer").innerHTML = pages34;
	}
}, false);

// 頁面彈窗跳轉

function pagesBox01(){
	pages = 1;
	document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
	document.getElementById("pagesBoxBackground").style.display = "none"; // 彈窗背景隱藏
	document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
	document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
	document.getElementById("pagesTitleContainerContainer").style.display = "none"; // 作品集標題隱藏
	document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
	document.getElementById("portfolioContainer").innerHTML = pages01; // 頁面切換
}

function pagesBox02(){
	pages = 2;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages02;
}

function pagesBox03(){
	pages = 3;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages03;
}

function pagesBox04(){
	pages = 4;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages04;
}

function pagesBox05(){
	pages = 5;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages05;
}

function pagesBox06(){
	pages = 6;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages06;
}

function pagesBox07(){
	pages = 7;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages07;
}

function pagesBox08(){
	pages = 8;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages08;
}

function pagesBox09(){
	pages = 9;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages09;
}

function pagesBox10(){
	pages = 10;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages10;
}

function pagesBox11(){
	pages = 11;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages11;
}

function pagesBox12(){
	pages = 12;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages12;
}

function pagesBox13(){
	pages = 13;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages13;
}

function pagesBox14(){
	pages = 14;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages14;
}

function pagesBox15(){
	pages = 15;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages15;
}

function pagesBox16(){
	pages = 16;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages16;
}

function pagesBox17(){
	pages = 17;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages17;
}

function pagesBox18(){
	pages = 18;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages18;
}

function pagesBox19(){
	pages = 19;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages19;
}

function pagesBox20(){
	pages = 20;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages20;
}

function pagesBox21(){
	pages = 21;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages21;
}

function pagesBox22(){
	pages = 22;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages22;
}

function pagesBox23(){
	pages = 23;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages23;
}

function pagesBox24(){
	pages = 24;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages24;
}

function pagesBox25(){
	pages = 25;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages25;
}

function pagesBox26(){
	pages = 26;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages26;
}

function pagesBox27(){
	pages = 27;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages27;
}

function pagesBox28(){
	pages = 28;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages28;
}

function pagesBox29(){
	pages = 29;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages29;
}

function pagesBox30(){
	pages = 30;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages30;
}

function pagesBox31(){
	pages = 31;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages31;
}

function pagesBox32(){
	pages = 32;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages32;
}

function pagesBox33(){
	pages = 33;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages33;
}

function pagesBox34(){
	pages = 34;
	document.getElementById("pagesBox").style.display = "none";
	document.getElementById("pagesBoxBackground").style.display = "none";
	document.getElementById("iconPortfolioClosePages").style.display = "none";
	document.getElementById("portfolioIconContainerContainer").style.display = "flex";
	document.getElementById("pagesTitleContainerContainer").style.display = "none";
	document.querySelector("body").classList.remove("no-scroll");
	document.getElementById("portfolioContainer").innerHTML = pages34;
}