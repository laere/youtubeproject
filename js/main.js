
window.onload = function() {

  var apiKey = 'AIzaSyAtPZ-URREb3HXrvbPRot04a8PG2p8laTg';
  var movieIds = [
    {  movieId: 'sGbxmsDFVnE', title: 'Star Wars The Force Awakens', info: 'Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.' },
    {  movieId: 'LhCKXJNGzN8', title: 'The Mist', info: 'After a powerful storm damages their Maine home, David Drayton (Thomas Jane) and his young son head into town to gather food and supplies. Soon afterward, a thick fog rolls in and engulfs the town, trapping the Draytons and others in the grocery store. Terror mounts as deadly creatures reveal themselves outside, but that may be nothing compared to the threat within, where a zealot (Marcia Gay Harden) calls for a sacrifice.' } ,
    {  movieId: 's7EdQ4FqbhY', title: 'Pulp Fiction', info: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).' },
    {  movieId: 'vntAEVjPBzQ', title: 'Ghostbusters', info: 'After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become "ghostbusters" to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city. The Ghostbusters must now save New York from complete destruction.' },
    {  movieId: 'Ymoh5SIqgtw', title: 'It Follows',  info: 'After carefree teenager Jay (Maika Monroe) sleeps with her new boyfriend, Hugh (Jake Weary), for the first time, she learns that she is the latest recipient of a fatal curse that is passed from victim to victim via sexual intercourse. Death, Jay learns, will creep inexorably toward her as either a friend or a stranger. Jays friends dont believe her seemingly paranoid ravings, until they too begin to see the phantom assassins and band together to help her flee or defend herself.' }
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

          //on success render data
          success: function(movie) {
            console.log(movie);

            //getters
            var title = document.querySelector('.title');
            var video = document.querySelector('#player');
            var info = document.querySelector('.videoDescription');
            //setters
            //title data
            var titleData = movie.items[0].snippet.title;
            title.innerHTML = titleData;
            //video data
            var videoData = movie.items[0].player.embedHtml;
            video.innerHTML = videoData;

            info.innerHTML = movieIds[index].info;

          },

          //on error log data
          error: function() {
            console.log('error loading data');

          }

        }); //end of ajax call



      }, false); //end of event listener

    }); //end of forEach

  } //end of grabMovies

};
