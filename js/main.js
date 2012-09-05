var links;

function scrollTo(href){
  link = $("" + href.substring(1, href.length) + "]");
  $(window).scrollTop(link.offset().top);
};

function updateNav(){
	var y = $(window).scrollTop();
	var last_name;

	links.each(function() {
	var name = $(this).attr("name");
	$("a[href$=" + name + "]").parent().removeClass("b-nav__item_state_active");

	var link_y = $(this).position()["top"];
	if (y >= link_y) {
		last_name = name;
	}
	});

	if (last_name == null) {
		$("a[href$=" + links.first().attr("name") + "]").parent().addClass("b-nav__item_state_active");
	}else{
		$("a[href$=" + last_name + "]").parent().addClass("b-nav__item_state_active");
	}
};

$(document).ready(function() {
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		nav_links = $(".b-nav__item");	
		var last_name;
		nav_links.each(function() {
			var name = $(this).attr("href");
			$("a[href$=" + name + "]").parent().removeClass("b-nav__item_state_active");

			var link_y = $(this).position()["top"];
			if (y >= link_y) {
				last_name = name;
		}
		});

		if (last_name == null) {
			$("a[href$=" + nav_links.first().attr("name") + "]").parent().addClass("b-nav__item_curr");
		}else{
			$("a[href$=" + last_name + "]").parent().addClass("b-nav__item_curr");
		}		

	});
});