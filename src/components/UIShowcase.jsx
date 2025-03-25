import Slider from "react-slick";

import car from "../assets/car-insurance-design.png";
import pet from "../assets/pet-ui1.png";
import travel from "../assets/travel-ui-solo.png";
import habit from "../assets/habit-app.png";
import flexport from "../assets/flexport2.png";
import everest from "../assets/everest.png";
import nowhealth from "../assets/nowhealth.png";
import rakbank from "../assets/rakbank.png";

export default function UIShowcase() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="max-w-full min-w-[133%] mb-4">
        <div>
          <div className="min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 rotate-[3deg] object-cover shadow-lg" src={car} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[500px] m-4 object-cover" src={pet} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 rotate-[3deg] object-cover shadow-lg" src={travel} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 rotate-[-3deg] object-cover shadow-lg" src={habit} />
          </div>
        </div>
      </Slider>
    </>
  );
}
