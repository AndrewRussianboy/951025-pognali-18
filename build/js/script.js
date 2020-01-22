var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');
var pageHeaderLogo = document.querySelector('.page-header__logo');
var pageHeaderLogoBlue = document.querySelector('.page-header__logo--blue');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var siteListLink = document.querySelectorAll('.site-list__link');
var siteList = document.querySelector('.site-list');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle');
    navToggle.classList.add('page-header__toggle--closed');
    pageHeader.classList.remove('page-header');
    pageHeader.classList.add('page-header--white');
    pageHeaderLogo.style.display='none';
    pageHeaderLogoBlue.style.display='inline-block';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle');
    pageHeader.classList.remove('page-header--white');
    pageHeader.classList.add('page-header');
    pageHeaderLogo.style.display='inline-block';
    pageHeaderLogoBlue.style.display='none';
  }
});

document.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
      pageHeader.classList.add('page-header--scroll');
      pageHeaderLogo.style.display='none';
      pageHeaderLogoBlue.style.display='inline-block';
      pageHeaderToggle.classList.add('page-header__toggle--scroll');
      navMain.classList.add('main-nav--scroll');
      for (var i = 0; i < siteListLink.length; i++) {
        siteListLink[i].classList.add('site-list__link--scroll');
      }
      siteList.classList.add('site-list--scroll');
    } else {
      pageHeader.classList.remove('page-header--scroll');
      pageHeaderLogo.style.display='inline-block';
      pageHeaderLogoBlue.style.display='none';
      pageHeaderToggle.classList.remove('page-header__toggle--scroll')
      navMain.classList.remove('main-nav--scroll');
      for (var i = 0; i < siteListLink.length; i++) {
        siteListLink[i].classList.remove('site-list__link--scroll');
      }
      siteList.classList.remove('site-list--scroll');
    }
})
