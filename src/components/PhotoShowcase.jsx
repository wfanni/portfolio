import Slider from "react-slick";

import portugal5 from "../assets/portugal7.png";
import spain from "../assets/spain5.jpg";
import switzerland2 from "../assets/switzerland2.jpg";
import portugal from "../assets/portugal3.png";
import switzerland3 from "../assets/switzerland8.png";
// import portugal2 from "../assets/portugal2.png";
import portugal3 from "../assets/portugal8.png";
import spain2 from "../assets/spain6.jpg";
import portugal4 from "../assets/portugal9.png";



export default function PhotoShowcase({ pathname }) {
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
      <Slider {...settings} className={`${pathname === "/works" ? "min-w-[100vw] translate-x-[10rem]" : "-right-28 min-w-[100vw]"} photo max-w-full mb-4`}>
        <div>
          <div className="min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={portugal5} />
          </div>
        </div>
        <div>
          <div className="min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={spain} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={switzerland2} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={portugal} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={switzerland3} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={portugal3} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={spain2} />
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex justify-center items-center">
            <img className="w-[200px] m-4 mb-6 object-cover shadow-lg" src={portugal4} />
          </div>
        </div>
      </Slider>
    </>
  );
}
