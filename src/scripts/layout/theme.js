import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

$(document).on("scroll", function(){
		if
      (($(window).width() < 700) && ($(document).scrollTop() > 50)){
		      $("header").addClass("shrink");
		  }
		else
		{
			$("header").removeClass("shrink");
		}
	});
