let btnProjects = document.querySelector("#projects")
let btnAboutMe = document.querySelector("#aboutMe")

btnProjects.addEventListener("click", ()=>{
    window.scroll({
        top: 800,
        left: 0,
        behavior: 'smooth'
      });
})

btnAboutMe.addEventListener("click", ()=>{
    window.scroll({
        top: 1289,
        left: 0,
        behavior: 'smooth'
      });
})

let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}