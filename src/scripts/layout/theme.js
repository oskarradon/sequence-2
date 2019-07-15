import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

// make header logo smaller on scroll to keep out of view

$(document).on("scroll", function(){
		if
      (($(window).width() < 940) && ($(document).scrollTop() > 50)){
		      $("header").addClass("shrink");
		  }
		else
		{
			$("header").removeClass("shrink");
		}
	});


// menu button on tiny phones like iphone 3/4

// if ($(window).width() < 368) {
// 	$("#header-nav").hide();
// }
