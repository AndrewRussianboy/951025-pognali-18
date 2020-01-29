var pageHeaderNameContainer = document.querySelector('.page-header__name-container');

document.addEventListener('scroll', function () {
  if (window.pageYOffset > 100 && pageHeader.contains(pageHeaderNameContainer)) {
    pageHeaderNameContainer.style.display='none';
  } else {
    pageHeaderNameContainer.style.display='flex';
  }
})
