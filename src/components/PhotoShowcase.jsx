import Slider from "react-slick";

import spain from "../assets/spain.JPG";
import spain2 from "../assets/spain2.jpg";
import switzerland from "../assets/switzerland.jpg";
import switzerland2 from "../assets/switzerland2.jpg";
import portugal from "../assets/portugal.jpg";
import portugal2 from "../assets/spain4.jpg";

export default function PhotoShowcase() {
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
      <Slider {...settings} className="max-w-full min-w-[133%] mb-4">
        <div>
          <div className="min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 object-cover shadow-lg" src={spain} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[500px] m-4 object-cover shadow-lg" src={spain2} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 object-cover shadow-lg" src={switzerland} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 object-cover shadow-lg" src={switzerland2} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 object-cover shadow-lg" src={portugal} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[400px] m-4 object-cover shadow-lg" src={portugal2} />
          </div>
        </div>
      </Slider>
    </>
  );
}
