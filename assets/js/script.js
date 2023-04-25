
                                                       // ScrollReveal



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});



ScrollReveal().reveal('.aboud__left, .contact__left', { origin: 'left' });


ScrollReveal().reveal('.aboud__right, .contact__right', { origin: 'right' });


ScrollReveal().reveal('.aboudme__left, .servis_flex', { origin: 'left' });


ScrollReveal().reveal('.home__header', { origin: 'top' });


ScrollReveal().reveal('.aboudme__right, .portfolio__flex', { origin: 'right' });


ScrollReveal().reveal('.aboudme_h1, .heder__text1', { origin: 'bottom' });



ScrollReveal().reveal('.bloc1, .bloc2, .bloc3', { origin: 'left' });


ScrollReveal().reveal('.bloc4, .bloc5, .bloc6', { origin: 'right' });


const typed = new Typed('.typing', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


// let langs = document.querySelector(".langs button"),
//     link = document.querySelectorAll("a"),
//     title = document.querySelector(".title"),
//     descr = document.querySelector(".description")

// link.forEach(el=>{
//     el.addEventListener("click", ()=>{
//         langs.querySelector(".active").classList.remove("active")
//         el.classList.add("active");
        
//         let attr = el.getAttribute("language")
//         title.textContent = data[attr].title
//         descr.textContent = data[attr].description
//     })
// })




