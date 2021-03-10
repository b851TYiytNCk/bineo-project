document.addEventListener("DOMContentLoaded", function(){

  var slides = document.querySelectorAll(".slidie"),
  cond = true,
  id = 0;

  setInterval(function(){
  
    if(id === 2) {
      slides[id].style.opacity = 0;
      id = -1;
    }

    id++;

    if (!(id === 0)){
      slides[id-1].style.opacity = 0;
    }
    slides[id].style.opacity = 1;

  }, 5000);

});