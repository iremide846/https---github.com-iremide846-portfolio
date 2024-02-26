/*======toggle icon navbar ========= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*======scroll section active link */

let sections = document.queryselectorAll('section');
let navLinks = document.queryselectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
            });
        };
    });
/*======sticky navbar ==========*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

    /*======remove toggle icon and navbar when click navbar link (scroll)========= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======scroll reveal =========*/
scrollReveal({
    // rest: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-content, .heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .service-container, .portfolio-box, ,contact form', { origin: 'bottom' });
scrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
scrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ===================*/
const typed = new typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});