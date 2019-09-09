$(function () {
	$('.hamburgermenu').on('click', function () {
		let openMenu = false;
		console.log('クリックしたよ');
		$('header').toggleClass('active')
		$('.hamburgermenu').toggleClass('active');
		$('.hidden-menu').toggleClass('open');
		$('.js-click-menu').toggleClass('active');

	})
})
