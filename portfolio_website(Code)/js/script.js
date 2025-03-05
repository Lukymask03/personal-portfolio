// this is just to smooth the scrolling for the website 

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click', function (e){;
    e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollintoView({
    behavior:'smooth'
});
});
});