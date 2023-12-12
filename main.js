const buttons = Array.from(document.getElementsByClassName('buttonz'))
const cardCarousel = document.getElementById('cardCarousel')
buttons.forEach((button,index) =>{
  button.addEventListener('click',()=>{
    cardCarousel.style.transform = `translateX(-${index * 600}px)`
  })
})