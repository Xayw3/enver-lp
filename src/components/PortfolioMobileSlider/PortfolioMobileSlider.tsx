import { useState } from 'react';
import './portfolio-mobile-slider.scss';

const PortfolioMobileSlider = () => {
  const [slide, setSlide] = useState(3);

  const mobileSlider = [
    {
      id: 1,
      slide: './portfolio-1.png',
    },
    {
      id: 2,
      slide: './portfolio-2.png',
    },
    {
      id: 3,
      slide: './portfolio-3.png',
    },
    {
      id: 4,
      slide: './portfolio-1.png',
    },
    {
      id: 5,
      slide: './portfolio-2.png',
    },
    {
      id: 6,
      slide: './portfolio-3.png',
    },
    {
      id: 7,
      slide: './portfolio-1.png',
    },
    {
      id: 8,
      slide: './portfolio-2.png',
    },
    {
      id: 9,
      slide: './portfolio-3.png',
    },
  ];

  return (
    <>
      <div className="slider-mobile">
        {
        mobileSlider.map((el) => (
          el.id === slide
            ? (
              <div className="slide">
                <div className="slide-img">
                  <img src={el.slide} alt="portfolio project" />
                </div>
              </div>
            ) : null
        ))
      }
      </div>
      <div className="slider-btns">
        <button
          disabled={slide === 1}
          className="prev-btn arrow-btn"
          onClick={() => setSlide(slide - 1)}
        >
          <img src="./btn-left.svg" alt="" />
        </button>
        <button
          disabled={slide === mobileSlider.length}
          className="next-btn arrow-btn"
          onClick={() => setSlide(slide + 1)}
        >
          <img src="./btn-right.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default PortfolioMobileSlider;
