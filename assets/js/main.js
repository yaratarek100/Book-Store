/*=============== SEARCH ===============*/
const searchContent =document.getElementById('search-content'),
      searchButton =document.getElementById('search-button'),
      searchClose =document.getElementById('search-close');

      if(searchButton){
        searchButton.addEventListener("click",()=>{
            searchContent.classList.add('show');
          })
        }
        if(searchClose){
          searchClose.addEventListener("click",()=>{
            searchContent.classList.remove('show');
          })
        }
        
        /*=============== LOGIN ===============*/
        const loginContent =document.getElementById('login-content'),
        loginButton =document.getElementById('login-button'),
        loginClose =document.getElementById('login-close');
        
        if(loginButton){
          loginButton.addEventListener("click",()=>{
            loginContent.classList.add('show');
          })
        }
        if(loginClose){
          loginClose.addEventListener("click",()=>{
            loginContent.classList.remove('show');
            console.log(loginContent.classList);
        })
      }

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
// using
window.addEventListener('scroll', shadowHeader)

// /*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper('.home_swiper', {
  loop: true,
  spaceBetween:-24,
  grabCursor:true,
  slidesPerView :'auto',
  centeredSlides:'auto',

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  breakpoints:{
    1220:{
      spaceBetween:-32,
    }
  }
});



/*=============== FEATURED SWIPER ===============*/
let featureSwiper = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  slidesPerView :'auto',
  centeredSlides:'auto',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    1150:{
      slidesPerView :4,
      centeredSlides:false,
    }
  }
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper('.Newbooks__container', {
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  slidesPerView :'auto',
  centeredSlides:'auto',
  
  breakpoints:{
    1150:{
      slidesPerView :3,
    }
  }
});

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
