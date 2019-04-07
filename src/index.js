
var x = {};
var y = {};

var width = window.innerWidth;
var height = window.innerHeight;
var faces = document.querySelectorAll('.cube-face');
var scene = document.querySelector('.scene');
var singleFace = document.querySelector('.cube-face');
var image = document.querySelectorAll('.image-face');
var overlay = document.querySelectorAll('.overlay');
var right = document.querySelector('.right');

document.addEventListener('touchstart', function(event) {
  if (!x.start || x.start === 0) {
    x.start = event.layerX || event.touches[0].pageX;
  }
  x.end = event.layerX || event.touches[0].pageX;

  /*if (!y.start || y.start === 0) {
    y.start = event.layerY || event.touches[0].pageY;
  }
  y.end = event.layerY || event.touches[0].pageY;*/

});

const rotation = {
  x: 0,
  y: 0,
}

const rotationToStyle = () => `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`

overlay.forEach(e => e.addEventListener('touchstart', function dimCurrentFace () {
  overlay.forEach(face => face.style.opacity = '0')
  //e.style.transition = 'transform 0.6s cubic-bezier(.4, .0, .2, 1)'
  e.style.opacity = '0.4'
}))

scene.addEventListener('touchmove', function(event) {
  if (!x.start || x.start === 0) {
    x.start = event.layerX || event.touches[0].pageX;
  }
  x.end = event.layerX || event.touches[0].pageX;
})

  var cube = document.querySelector('.cube');
  var overlay = document.querySelectorAll('.overlay')

  scene
  .addEventListener('touchend', function(event) {
    if (x.start === x.end) {
      window.location.href = 'http://www.alkacappellazzo.it/'
    }

  if (x.end < x.start) {
    rotation.y -= 90 //increase
    cube.style.transform = rotationToStyle()
  }

  if (x.end > x.start) {
    rotation.y += 90 //increase
    cube.style.transform = rotationToStyle()
  }
  x.start = 0;
  x.end = 0;

})

cta.onclick = function () {
  window.location.href = 'http://www.alkacappellazzo.it/''
}
