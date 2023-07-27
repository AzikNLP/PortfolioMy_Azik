window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const hobiz = document.querySelector('header')
        hobiz.classList.toggle('gost', window.scrollY > 0)
    })
    const mert = document.querySelector('.menu-btn')
    const nba = document.querySelector('.navigation')
    mert.addEventListener('click', ()=>{
        mert.classList.toggle('glop')
        nba.classList.toggle('glop')
    })
})