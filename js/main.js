
$(document).ready(function() {

  var $title = $('a');

  $title.click(function() {

    var currTitle = $('a.selected');
    // remove class from curr target
    currTitle.removeClass('selected');
    // add class to target clicked
    $(this).addClass('selected');
    //hide other movies by default
    $('div.mainContent').hide()
    //show movie based on href attribute (which is an id of the title of the movie)
    $(this.getAttribute('href')).show();
	$('iframe').each(function(){
		$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		console.log($(this)[0]);
	});
  });


});
