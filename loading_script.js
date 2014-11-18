$(document).ready(function() {	
	//var get_window_height = $(window).height();
	//$("#loading_bar").css("top", get_window_height/2 + "px");
	/*$("#loading_bar").animate({'width' : '100%'}, 3000);
	$("#loading_bar").animate({'margin-left' : '100%'});
	$("#loader_title").delay(3000).fadeOut();
	$("#top").delay(3000).animate({'height' : '0%'});
	$("#bottom").delay(3000).animate({'height' : '0%'});*/
	$("#title").html("citykit");
	$("#title").css("font-size", $("#title").height());
	$("#loader_title").css("font-size", $("#loader_title").height());
	$("#title").css("top", ($(window).height()/2) - ($("#title").height()/2) + "px");	

	$(window).resize(function() {
		//$("#loading_bar").css("top", get_window_height/2 + "px");
		/*$("#title").html($(window).width());*/
		if ($(window).width() <= 516) {
			$("#title").html("city-<br>kit");
			$("#title").css("font-size", $("#title").height());
			$("#title").css("top", ($(window).height()/2) - ($("#title").height()) + "px");
		}
		else {
			$("#title").html("citykit");
			$("#title").css("font-size", $("#title").height());
			//$("#loader_title").css("font-size", $("#loader_title").height());
			$("#title").css("top", ($(window).height()/2) - ($("#title").height()/2) + "px");
		}
	});
});