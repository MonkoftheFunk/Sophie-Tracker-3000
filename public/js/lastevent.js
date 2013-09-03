$(function() {
	updateLastEvent();
	setInterval('updateLastEvent()', 1000);
});

function updateLastEvent()
{
	$.get('track/stats', function (response) {
		$('.eventbutton-feed').find('.badge').html(response.feed.time);
		$('.eventbutton-pump').find('.badge').html(response.pump.time);
		$('.eventbutton-diaper').find('.badge').html(response.diaper.time);
	});
}