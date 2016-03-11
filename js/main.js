
window.onload = function() {

  // var $title = $('a');
  // var $iframe =$('iframe');
  var apiKey = 'AIzaSyAtPZ-URREb3HXrvbPRot04a8PG2p8laTg';
  var movieIds = [
  {  movieId: 'sGbxmsDFVnE', title: 'Star Wars The Force Awakens' },
  {  movieId: 'LhCKXJNGzN8', title: 'The Mist' } ,
  {  movieId: 's7EdQ4FqbhY', title: 'Pulp Fiction'},
  {  movieId: 'vntAEVjPBzQ', title: 'Ghostbusters'},
  {  movieId: 'Ymoh5SIqgtw', title: 'It Follows'}
];

  grabMovies();

  function grabMovies() {

    movieIds.forEach(function(movie, index) {

      //dynamically create a button for each title, and give it an id.
      var movieTitles = document.querySelector('#movieTitles');
      var titleButton = document.createElement('input');
      titleButton.setAttribute('type', 'submit');
      titleButton.setAttribute('id', movieIds[index].title);
      titleButton.setAttribute('value', movieIds[index].title);
      movieTitles.appendChild(titleButton);

      //for each button add an event listener that grabs the data based on movieId
      titleButton.addEventListener('click', function() {

        $.ajax({

          type:'GET',

          url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=' + movieIds[index].movieId + '&key=' + apiKey,

          success: function(movie) {
            console.log(movie);
            console.log(movie.items[0].player.embedHtml);

            //getters
            var title = document.querySelector('.title');
            var video = document.querySelector('#player');
            var info = document.querySelector('.videoDescription');

            //setters
            var titleData = document.createTextNode(movie.items[0].snippet.title);
            title.appendChild(titleData);

            var videoData = movie.items[0].player.embedHtml;

            video.innerHTML = videoData;

          },

          error: function() {
            console.log('error loading data');
          }

        });
      }, false);

      //render the received data to the correct elements.


    });
  }
};
