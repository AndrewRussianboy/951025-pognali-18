var pageHeaderName = document.querySelector('.page-header__name');

document.addEventListener('scroll', function () {
  if (window.scrollY > 1 && pageHeader.contains(pageHeaderName)) {
    pageHeaderName.style.display='none';
  } else {
    pageHeaderName.style.display='block';
  }
})

