$(function () {
	$('.hamburgermenu').on('click', function () {
		console.log('クリックしたよ');
		$('.hamburgermenu').toggleClass('active');
		$('.hidden-menu').toggleClass('open');
		$('.js-click-menu').toggleClass('active')
	})
});
