function updateNav(){
	var window_y = $(window).scrollTop();
	var	nav_links = $(".b-nav__item");
	var last_id = '';
	
	nav_links.each(function(){
		var id = $(this).attr("href");
		var link_y = $(id).offset().top;
		if (window_y >= link_y){
			last_id = id;
		}
	});

	var active_item = $(".b-nav__item_curr");

	if (last_id != '' && last_id != active_item.attr("href")){
		active_item.removeClass("b-nav__item_curr");
		$('a[href="'+last_id+'"]').addClass("b-nav__item_curr");
	}
}

$(document).ready(function() {
	$(window).scroll(function(){
		updateNav();
	});
});

