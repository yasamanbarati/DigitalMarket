import { CarouselDots } from '../../../../helpers/carousel-dots'

export const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  dots: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  placeholders: false,
  ...CarouselDots({}),
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        centerPadding: '35px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '25px',
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        centerPadding: '8px',
      },
    },
  ],
}
