// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    //grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





// Nav open close
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".searchBox"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

        // js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
          searchToggle.classList.toggle("active");
        });

      //   js code to toggle sidebar                  addEventListener تسوي اكثر من حدث في نفس الوقت
      sidebarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
      });

      body.addEventListener("click" , e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
      });


// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5){
      document.querySelector(".nav").classList.add("nav-active");
  }else{
      document.querySelector(".nav").classList.remove("nav-active");
  }
})
