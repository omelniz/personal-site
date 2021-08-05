$(".kitchen__item__image").lazyload().on("load", function () {
	$(".kitchen__item").fadeIn();
});