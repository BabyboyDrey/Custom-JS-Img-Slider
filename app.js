var slides = document.querySelectorAll('.slide')
var buttonLeft = document.getElementById('button-left')
var buttonRight = document.getElementById('button-right')

buttonLeft.addEventListener('click', toPrev)
buttonRight.addEventListener('click', toNext)

var current = 0
var prev = 4
var next = 1

function toPrev () {
  if (current > 0) {
    toSlide(current - 1)
  } else {
    toSlide(slides.length - 1)
  }
}
function toNext () {
  if (current < 4) {
    toSlide(current + 1)
  } else {
    toSlide(0)
  }
}
function toSlide (num) {
  current = num
  prev = current - 1
  next = current + 1

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slideActive')
    slides[i].classList.remove('slideNext')
    slides[i].classList.remove('slidePrev')
  }
  if (next == 5) {
    next = 0
  }
  if (prev == -1) {
    next = 4
  }
  slides[current].classList.add('slideActive')
  slides[next].classList.add('slideNext')
  slides[prev].classList.add('slidePrev')
}
