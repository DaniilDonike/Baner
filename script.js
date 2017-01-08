setTimeout(function() {
	$('body').append('<div id="baner"><button id="close">X</button><p>Warning</p></div>');

$('#close').click(function() {
	console.log('0_0');
	$('#baner').remove();
});
}, 500);

