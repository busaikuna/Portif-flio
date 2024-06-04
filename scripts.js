document.addEventListener("scroll", ()=>{
    if (document.documentElement.scrollTop > 220){
              
    }
})

let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
