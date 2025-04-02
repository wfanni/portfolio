import Slider from "react-slick";

import car from "../assets/car-insurance-design.png";
import pet from "../assets/pet-ui1.png";
import travel from "../assets/travel-ui-solo.png";
import habit from "../assets/habit-app.png";

export default function UIShowcase({ pathname }) {
  const settings = {
    dots: true,
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
      <Slider {...settings} className={`${pathname === "/works" ? "min-w-[100vw] translate-x-[10rem]" : "-right-28 min-w-[100vw]"} ui max-w-full mb-4`}>
        <div>
          <div className="min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={car} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[250px] m-4 mb-6 object-cover" src={pet} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="max-h-[165px] m-4 mb-6 object-top object-cover shadow-lg" src={travel} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={habit} />
          </div>
        </div>
      </Slider>
    </>
  );
}
