// Responsive navbar script
window.onload=function(){
  const menu_btn=document.querySelector('.right-bar');
  const mobile_nav= document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click',function(){
      menu_btn.classList.toggle('is-active');
      mobile_nav.classList.toggle('is-active');
  });
};

// Carousel slider script for product images

let tumbnails= document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider")
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () =>{
    slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () =>{
  slider.scrollLeft += 125;
  });

  const maxScrolleft = slider.scrollWidth - slider.clientWidth

   //Autoplay for slider
   function autoplay(){
    if(slider.scrollLeft > (maxScrolleft -1)){
      slider.scrollLeft -= maxScrolleft;
    } else{
      slider.scrollLeft += 1;

    }
   }

   let play = setInterval(autoplay,50);
     
   for(let i = 0; i < tumbnails.length; i++) {
    tumbnails[i].addEventListener("mouseover",() => {
      clearInterval(play)
  })
    tumbnails[i].addEventListener("mouseout", () =>{
    return play = setInterval(autoplay, 50);
  })

 }
     
 
 