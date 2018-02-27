var images = [
  "https://media1.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",
  "https://media2.giphy.com/media/amUVFzg1wNZKg/giphy.gif",
  "https://media3.giphy.com/media/ZvLUtG6BZkBi0/giphy.gif",
  "https://media2.giphy.com/media/fQZX2aoRC1Tqw/giphy.gif",
  "https://media0.giphy.com/media/yK3PyRmUj0T3W/giphy.gif",
  "https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif",
  "https://media3.giphy.com/media/yR4xZagT71AAM/giphy.gif",
  "https://media2.giphy.com/media/ah7KwjMNJlhtK/giphy.gif",
  "https://media1.giphy.com/media/wpoLqr5FT1sY0/giphy.gif",
  "https://media1.giphy.com/media/eCqFYAVjjDksg/giphy.gif",
]





document.addEventListener("DOMContentLoaded", function() {
  var backgroundTarget = document.getElementById("background");


  var i = 0;
  setInterval(function() {
        backgroundTarget.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
          i =  0;
        }
  }, 2000);
});
