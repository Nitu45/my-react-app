import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TrendingCarousel.css';

const TrendingCarousel = ({ movies = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Trending Movies</h2>
      <Slider {...settings}>
        {Array.isArray(movies) && movies.map((movie, index) => (
          <div key={index} className="carousel-item">
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingCarousel;