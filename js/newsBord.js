$(function () {
	var news;
	$.ajax({
		url: '../js/news.txt',
		type: 'get',
		success: function (data) {
			news = data.split(/\n/);
			console.log(news);
			for (i = 0; i < news.length; i++) {
				$('#newsbord').append('<div class="news">' + news[i] + '</div>')
			}
			//$('#newsbord').text(news);

		},
		error: function (data) {
			alert('データ読み込み失敗')
		}
	})
});
