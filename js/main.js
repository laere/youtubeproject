
$(document).ready(function() {

  var $title = $('a');

  $title.click(function() {
    //hide all content other than one with visible class
    $('div.mainContent').hide()
    //currently selected title
    var currTitle = $('a.selected');
    // remove class from curr target
    currTitle.removeClass('selected');
    // add class to target clicked
    $(this).addClass('selected');
    //show movie based on href attribute (which is an id of the title of the movie)
    $(this.getAttribute('href')).show();

    stopVideoOnSwitch();

  });

  function stopVideoOnSwitch() {

    $('iframe').each(function() {
  		$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  		console.log($(this)[0]);
  	});
    
  }



});
