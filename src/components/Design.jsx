import { forwardRef } from "react";

const Design = forwardRef(function Design({}, ref) {
  return (
    <section
      ref={ref}
      className="min-h-screen h-fit xs:pt-16 sm:pt-0 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="xs:text-3xl sm:text-[3rem] uppercase">Portfolio Design</h2>
      <div className="xs:w-4/5 sm:w-3/4 mx-auto flex flex-col justify-between items-center xs:gap-16 sm:gap-16">
        <div className="xs:text-justify sm:text-center">
          <h3 className="text-[1.6rem] uppercase mb-4">The Idea</h3>
          <p>
            My goal with this Portfolio is to create a simple, minimalistic
            website where I can list my personal and demo projects on. In the
            future I am planning to develop more of these projects so I can fill
            the Projects section a bit more.
          </p>
          <p className="m-auto w-fit relative xs:mt-4">I might play around with the design in the future!<i className="absolute xs:top-6 sm:top-0 sm:-right-12 pl-2 text-orange text-4xl fa-solid fa-wand-magic-sparkles"></i></p>
        </div>
        <div className="w-full flex xs:flex-col sm:flex-row xs:gap-12 sm:gap-0 justify-between">
          <div className="xsw-full sm:w-1/2 flex flex-col justify-center items-center xs:gap-8 sm:gap-4 text-center">
              <h3 className="text-[1.6rem] w-1/2 uppercase">Colors</h3>
              <p className="xs:w-full sm:w-2/3">
                I love orange and green, so I defnitely wanted to use my two
                favourite colors in the App.
              </p>
            <div className="flex gap-4 xs:flex-wrap sm:flex-nowrap justify-center items-center">
              <span className="block w-[100px] h-[100px] bg-orange text-white flex justify-center items-center">
                #ff5d30
              </span>
              <span className="block w-[100px] h-[100px] bg-green text-black flex justify-center items-center">
                #6eeb83
              </span>
              <span className="block w-[100px] h-[100px] bg-dark text-white flex justify-center items-center">
                #20063b
              </span>
              <span className="block w-[100px] h-[100px] bg-white text-black flex justify-center items-center">
                #ffffff
              </span>
            </div>
          </div>
          <div className="xs:w-full sm:w-1/2 flex flex-col justify-center items-center xs:gap-8 sm:gap-4 xs:text-justify sm:text-center">
            <h3 className="text-[1.6rem] uppercase">Font</h3>
            <p>I planned on using two fonts in the beginning, but I felt like it was better for the smaller texts as well this time. Even though Josefin Sans is rather a display font, I prefered using it in the About section instead of Poppins.</p>
            <span className="xs:text-5xl sm:text-7xl">Josefin Sans</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Design;
