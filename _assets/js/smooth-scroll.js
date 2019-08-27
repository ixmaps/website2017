$(function() {
	$('a[href*="#"]').not('[href="#"]').click(function() {
		var _this = this;
		if (location.pathname.replace(/^\//,'') == _this.pathname.replace(/^\//,'') && location.hostname == _this.hostname) {
			var hash = _this.hash;
			var target = $(hash);
			target = target.length ? target : $('[name=' + hash.slice(1) +']');
			if (target.length && !$(_this).hasClass("no-scroll")) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
