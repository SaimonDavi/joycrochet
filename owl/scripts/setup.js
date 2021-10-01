$('.materials').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplaySpeed: 6000,
  autoplay: false,
  autoplayTimeout: 4300,
  stagePadding: 55,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

$('.testimonials').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  stagePadding: 55,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
