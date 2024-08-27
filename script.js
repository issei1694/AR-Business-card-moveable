document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#videoBunny');
  
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
  
    playButton.addEventListener('click', function() {
      video.play();
    });
  
    pauseButton.addEventListener('click', function() {
      video.pause();
    });
  
    const logoSpotify1 = document.getElementById('logoSpotify1');
    const logoInstagram = document.getElementById('logoInstagram');
    const logoSpotify2 = document.getElementById('logoSpotify2');
    const logoSpotify3 = document.getElementById('logoSpotify3');
  
    logoSpotify1.addEventListener('click', function() {
      window.location.href = 'https://www.imdb.com/name/nm14115341/';
    });
  
    logoInstagram.addEventListener('click', function() {
      window.location.href = 'https://www.instagram.com/djhimanshumishra/';
    });
  
    logoSpotify2.addEventListener('click', function() {
      window.location.href = 'https://gntunes.com/djhimanshumishra';
    });
  
    logoSpotify3.addEventListener('click', function() {
      window.location.href = 'https://open.spotify.com/artist/1UI8TqDajrGyDZA3SGjaR0';
    });
  });
  