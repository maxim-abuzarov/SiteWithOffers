const menuBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const aside = document.querySelector('.aside');

// show-hide aside
menuBtn.onclick = function() {

    menuIcon.classList.toggle('menu-icon-active');
    aside.classList.toggle('aside--mobile-active');

}

// add opacity on menu icon
window.addEventListener('scroll', function() {
    if (this.pageYOffset > 20) {
        menuBtn.classList.add('scroll');
    } else {
        menuBtn.classList.remove('scroll');
    }
});