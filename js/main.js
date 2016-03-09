
$(document).ready(function() {

  var $title = $('a');
  var $iframe =$('iframe');

  $('button').click(function(){
    // Play video and go fullscreen
    console.log('hi');
    var playerElement = $('.playerWrapper');
    var requestFullScreen = playerElement.requestFullScreen || playerElement.mozRequestFullScreen || playerElement.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(playerElement)();
    }
  });

  $title.click(function() {
    //hide all content other than one with visible class
    $('div.mainContent').hide();
    //currently selected title
    var currTitle = $('a.selected');
    // remove class from curr target
    currTitle.removeClass('selected');
    // add class to target clicked
    $(this).addClass('selected');
    //show movie based on href attribute (which is an id of the title of the movie)
    $(this.getAttribute('href')).fadeIn(500);

    stopVideoOnSwitch();

  });

  function stopVideoOnSwitch() {
    //for each iframe element
    $iframe.each(function() {
      //use the post message api to message the youtube api and retrieve the stopVideo func.
      $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      console.log($(this)[0]);
    });

  }



});
