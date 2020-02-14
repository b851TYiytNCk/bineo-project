var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 6000;
var hoverInterval = 7000;
var navBtnId = 0;
var switchInterval = setInterval(nextSlide, slideInterval);

$(document).ready(function () {
  setInterval(nextSlide, slideInterval);

  $('#viewport').hover(function() {
    clearInterval(switchInterval);
},function() {
    switchInterval = setInterval(nextSlide, hoverInterval);
});

$('#next-btn').click(function() {
  nextSlide();
  clearInterval(switchInterval);
});

$('#prev-btn').click(function() {
  prevSlide();
  clearInterval(switchInterval);
});

$('.slide-nav-btn').click(function() {
  navBtnId = $(this).index();

  if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#viewport').width() * (navBtnId);
      $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
  }
}); 

});
function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('#slidewrapper').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
      translateWidth = -$('#viewport').width() * (slideNow);
      $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow++;
      clearInterval(switchInterval);
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('#viewport').width() * (slideCount - 1);
      $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = slideCount;
      clearInterval(switchInterval);
  } else {
      translateWidth = -$('#viewport').width() * (slideNow - 2);
      $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      clearInterval(switchInterval);
  }
}
clearInterval(switchInterval);

