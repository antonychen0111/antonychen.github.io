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
}

// 頁面彈窗關閉
function portfolioPagesClose(){
		document.querySelector("body").classList.remove("no-scroll"); // 允許滾動
		document.getElementById("pagesBoxBackground").style.display = "none"; // 彈窗背景隱藏
		document.getElementById("pagesBox").style.display = "none"; // 彈窗關閉
		document.getElementById("iconPortfolioClosePages").style.display = "none"; // 彈窗按鈕隱藏
		document.getElementById("portfolioIconContainerContainer").style.display = "flex"; // 按鈕顯示
}
// 頁面彈窗跳轉

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