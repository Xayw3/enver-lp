import { useState } from 'react';
import './portfolio-slider.scss';

const PortfolioSlider = () => {
  const [slide, setSlide] = useState(2);

  const slider = [
    {
      id: 1,
      firstImage: './portfolio-1.png',
      secondImage: './portfolio-2.png',
      thirdImage: './portfolio-3.png',
    },
    {
      id: 2,
      firstImage: './portfolio-3.png',
      secondImage: './portfolio-1.png',
      thirdImage: './portfolio-2.png',
    },
    {
      id: 3,
      firstImage: './portfolio-2.png',
      secondImage: './portfolio-1.png',
      thirdImage: './portfolio-3.png',
    },
  ];

  return (
    <>
      <div className="slider">
        {
          slider.map((el) => (
            el.id === slide
              ? (
                <div className="slide">
                  <div className="slide-img">
                    <img src={el.firstImage} alt="portfolio project" />
                  </div>
                  <div className="slide-img">
                    <img src={el.secondImage} alt="portfolio project" />
                  </div>
                  <div className="slide-img">
                    <img src={el.thirdImage} alt="portfolio project" />
                  </div>
                </div>
              ) : null
          ))
        }
      </div>
      <div className="dots">
        {
          slider.map((el) => (
            <button className={`slider-btn ${el.id === slide ? 'active' : ''}`} onClick={() => setSlide(el.id)}>
              {el.id}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default PortfolioSlider;
