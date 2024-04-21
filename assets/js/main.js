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
let TESTIMONIALSwiper = new Swiper('.testimonial_container', {
  loop: true,
  spaceBetween:12,
  grabCursor:true,
  slidesPerView :'auto',
  centeredSlides:'auto',
  
  breakpoints:{
    1150:{
      slidesPerView :3,
    }
  }
});

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/



const sections = document.querySelectorAll('section[id]')

function activeLink (){
  const currentPositon=window.scrollY;
  // console.log("current scroll"+currentPositon);
  
  for (section of sections){
  
  const sectionTop =section.offsetTop-60;
  const sectionHeight=section.offsetHeight;
  const sectionBottom = sectionTop +sectionHeight -60 ;
  const sectionId =section.getAttribute('id');
  const currentSectionLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

  if (currentPositon>sectionTop && currentPositon<=sectionBottom){
   currentSectionLink.classList.add('active-link');
  }else{
   currentSectionLink.classList.remove('active-link');  
  }
}


}

window.addEventListener('scroll',activeLink);

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')

const light =()=> {
document.body.classList.remove('dark-theme');
themeButton.classList.remove('ri-sun-line');}

const dark =()=> {
document.body.classList.add('dark-theme');
themeButton.classList.add('ri-sun-line');}

if (localStorage.getItem('selected-theme')=='dark')
{dark();}



themeButton.addEventListener('click', () => {
  if (localStorage.getItem('selected-theme')=='dark')
  { light();
  localStorage.removeItem('selected-theme');
}
else{
  dark();
  localStorage.setItem('selected-theme','dark');
  }
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
