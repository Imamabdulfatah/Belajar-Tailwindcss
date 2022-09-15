
// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
// mendefinisikan sebagai selector /pemilih #hamburger=id
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// jika diclick maka
hamburger.addEventListener('click', function( ) {
    // toogle ini jika ada kelasnya biarkan kalau belum tambahin 
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});