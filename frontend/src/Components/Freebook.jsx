import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';
import { Autoplay } from 'swiper/modules';

const Freebook = () => {
  const ListFree = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    Autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='px-4 md:px-14 space-y-4'>

        <div className='space-y-2'>
          <h1 className='text-2xl font-semibold'>Free Offered Courses</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero vel consequatur ea dolor nulla magnam rerum, eaque tempora deleniti modi unde eligendi sunt aspernatur molestias? Libero repellendus neque animi.</p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {
              ListFree.map((item)=>
                <Cards item={item} key={item.id} />
              )
            }
          </Slider>
        </div>
      </div>

    </>
  );
}

export default Freebook