const toggle = document.querySelector('#toggle');
// const nav = document.querySelector('.nav-items');

toggle.addEventListener('click',()=>{
    console.log('clicked')
    var nav = document.querySelector('.nav-items');

    nav.classList.toggle('show')
} )


