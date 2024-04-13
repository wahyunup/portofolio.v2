// ============================ Toggle icon navbar=============================
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');                          
    navbar.classList.toggle('active');
}
// ============================scroll section active link======================
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let = window.scrollY;
        let = sec.offsetTop - 150;
        let = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ========================= sticky navbar =================================
    let header = document.querySelectorAll('header')
    let.classList.toggle('sticky', window.scrollY > 100);
    // ========================= remove togler icon and navbar =================================

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// ============================= scroll reveal =========================================
scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.homeContainer, .header', {origin: `top`});
scrollReveal().reveal('.home-img, .serviceContainer, .portofolioBox, .contact Form', {origin: `buttom`});
scrollReveal().reveal('.socialMedia h1, .aboutImg', {origin: `left`});
scrollReveal().reveal('.socialMedia p, .aboutContent', {origin: `left`});