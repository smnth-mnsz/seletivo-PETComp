const slides = document.querySelector('.slides'); 
const images = document.querySelectorAll('.slides img');
let index = 0; 

const totalImagens = images.length

function updateCarousel (){
     slides.style.transform = `translateX(${-index * 100}%)`;

}

document.querySelector('.next').addEventListener('click',() =>{ 
    index = (index + 1)% totalImagens;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click',() =>{ 
    index = (index - 1 + totalImagens)% totalImagens;
    updateCarousel();
});