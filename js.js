let hamburger = document.getElementById('hamburger')
let close = document.getElementById('close')
let menu = document.getElementById('menu')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('inactive')
    close.classList.toggle('inactive')
    menu.classList.toggle('inactive')
    menu.classList.add('nav-menu')
})

close.addEventListener('click', ()=>{
    close.classList.toggle('inactive')
    menu.classList.toggle('inactive')
    hamburger.classList.toggle('inactive')
})