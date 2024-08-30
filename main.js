// ============================ Toggle icon navbar=============================
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');                          
    navbar.classList.toggle('active');
}
// ============================click section active link======================
let navLink = document.querySelectorAll('header nav a');

navLink.forEach(function(btn) {
    btn.addEventListener('click', function() {

        navLink.forEach(function(item) {
            item.classList.remove('active');
        });

        btn.classList.add('active')
    })
})