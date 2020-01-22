var profileDetails = document.querySelector('.profile-details');

document.addEventListener('scroll', function () {
  if (window.scrollY > 1 && pageHeader.contains(pageHeaderName)) {
    profileDetails.style.position='relative';
  } else {
    profileDetails.style.position='inherit';
  }
})
