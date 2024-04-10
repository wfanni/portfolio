import Slider from "react-slick";

import zurich from "../assets/zurich.png";
import hamilton from "../assets/hamilton.png";
import sukoon from "../assets/sukoon-small.svg";
import cuvro from "../assets/cuvro.png";
import flexport from "../assets/flexport2.png";
import everest from "../assets/everest.png";
import nowhealth from "../assets/nowhealth.png";
import rakbank from "../assets/rakbank.png";

export default function ClientShowcase() {
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
      <Slider {...settings} className="w-3/4 mb-4">
        <div>
          <div className="min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-14 object-cover" src={zurich} />
            <label>Zurich Insurance</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="h-12 object-cover" src={hamilton} />
            <label>Hamilton Insurance Group</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-12 object-cover" src={sukoon} />
            <label>Sukoon Insurance</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-28 object-cover" src={cuvro} />
            <label>Cuvro Insurance</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-16 object-cover" src={flexport} />
            <label>Flexport International</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-16 object-cover" src={everest} />
            <label>Everest Insurance</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-28 object-cover" src={nowhealth} />
            <label>Now Health International</label>
          </div>
        </div>
        <div>
          <div className=" min-h-[100px] flex flex-col gap-4 justify-between items-center">
            <img className="w-14 object-cover" src={rakbank} />
            <label>RAK Insurance</label>
          </div>
        </div>
      </Slider>
    </>
  );
}
