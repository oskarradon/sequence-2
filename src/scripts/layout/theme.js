import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

// make header logo smaller on scroll to keep out of view

$(document).on("scroll", () => {
	if (($(window).width() < 940) && ($(document).scrollTop() > 50)){
	   $("header").addClass("shrink");
	} else {
		$("header").removeClass("shrink");
	}
});

// menu button on tiny phones like iphone 3/4 that shows/hides header-nav

function headerMenu() {
	let windowWidth = $(window).width();
	if ((windowWidth < 368) && (!$("#header-nav").hasClass('visible'))) {
		$("#header-nav").hide();

		$("#menu-button").click(() => {
			if ($("#header-nav").hasClass('visible')) {
				$("#header-nav").hide();
				$("#header-nav").removeClass('visible');
				$("#menu-button").text("Menu");
			} else {
				$("#header-nav").show();
				$("#header-nav").addClass('visible');
				$("#menu-button").text("X");
			}
		});
	} else {
		$("#header-nav").show();
	}
}

// used to fix bottom spacing of nav text on chrome

function isChrome() {
	// reference: https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618
	let isChromium = window.chrome;
	let winNav = window.navigator;
	let vendorName = winNav.vendor;
	let isOpera = typeof window.opr !== "undefined";
	let isIEedge = winNav.userAgent.indexOf("Edge") > -1;
	let isIOSChrome = winNav.userAgent.match("CriOS");

	if (isIOSChrome || (
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false &&
	  isIEedge === false
	)) {
		$("#header-nav").addClass('chrome-nav');
	}
}

// implement functions

headerMenu();
isChrome();

$(window).resize(function(){
	headerMenu();
	isChrome();
});
