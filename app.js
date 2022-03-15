const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',()=>{
    console.log('clicked')
    var nav = document.querySelector('.nav-items');

    nav.classList.toggle('show')
} )





