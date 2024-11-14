// Smooth scrolling for internal links
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 70,
          },
          800
        );
      }
    });
  
    // Close responsive menu on nav item click
    $('.navbar-collapse ul li a').on('click', function () {
      $('.navbar-toggler:visible').click();
    });
  });
  