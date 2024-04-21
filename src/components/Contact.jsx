import { forwardRef } from "react";
import github from "../assets/github.png";
import profile from "../assets/github-profile.png";
import EmailForm from "./EmailForm";

const Contact = forwardRef(function Contact({}, ref) {

  return (
    <section
      ref={ref}
      className="contact bg-contact bg-cover lg:bg-[length:80%_90%] bg-no-repeat bg-[center_bottom_-4rem] min-h-screen w-full pt-16 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] -mt-16 uppercase">Contact me</h2>
      <div className="relative h-full xs:w-4/5 lg:w-1/2 xs:pb-8 flex xs:flex-col lg:flex-row justify-center items-center gap-12 overflow-visible">
        <div className="xs:w-full lg:w-3/5 h-full">
          <EmailForm />
        </div>
        <div className="xs:w-full lg:w-2/5 flex flex-col justify-between items-start gap-12">
          <div className="relative w-full flex xs:justify-center lg:justify-between">
            <div className="w-[250px] h-[130px] rounded-[25px] bg-white overflow-hidden shadow-lg">
              <div className="h-[45] flex items-center gap-2 p-[0.7rem] bg-[#bfb1e3]">
                <i className="text-[1.4rem] fa-brands fa-github"></i>
                <img className="h-[1.3rem]" src={github} alt="github logo" />
              </div>
              <div className="flex h-[85px] gap-4 items-center p-2 px-4">
                <img
                  className="w-[52px] h-[52px] rounded-full object-cover"
                  src={profile}
                  alt="github profile picture"
                />
                <div className="flex flex-col">
                  <label className="text-[1.1rem] indent-2">
                    wfanni
                  </label>
                  <button className="h-[32px] leading-[31px] px-[0.8rem] text-[1rem] text-dark font-['Arial'] font-bold border-2 border-[#bfb1e3] rounded-full transition-all duration-300 hover:bg-[#bfb1e333] hover:border-[#8878b3]">
                    <a href="https://github.com/wfanni">View profile</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex xs:justify-center lg:justify-between">
            <div
              className="badge-base LI-profile-badge w-[250px] h-[281px] rounded-[25px] overflow-hidden shadow-lg"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="fanni-wihl"
              data-version="v1"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;

// after:content-[''] after:absolute after:w-[75vw] after:h-[100vh] after:bg-contact after:bg-cover after:bg-no-repeat after:bg-[length:700px] after:bg-[center_top_5rem]

{
  /* <span
className="relative group z-10 py-2 px-4 pt-[0.6rem] cursor-pointer border-2 border-transparent hover:border-orange rounded-full transition-all duration-200"
onClick={copyToClipboard}
>
<span
ref={emailRef}
className="group-hover:text-orange group-active:text-orange group-focus:text-orange xs:ml-4 sm:ml-2 lg:ml-0 xs:pr-4"
>
fanniwihl@gmail.com
</span>
<i
className={`${
  isCopied ? "text-orange opacity-100" : "opacity-0"
} xs:absolute xs:top-[50%] xs:translate-y-[-50%] xs:right-2 pl-2 lg:leading-[1] group-hover:opacity-100 transition-all duration-200 fa-regular fa-copy`}
></i>
</span>; */
}

{
  /* <i className="absolute text-orange opacity-20 rotate-6 xs:left-8 sm:left-16 lg:left-24 -top-2 text-[5rem] fa-regular fa-envelope"></i> */
}
{
  /* <i className="absolute text-orange opacity-20 -rotate-12 xs:left-8 sm:left-28 lg:-left-24 xs:bottom-0 sm:-bottom-8 lg:-bottom-8 text-[5rem] fa-solid fa-code"></i> */
}
{
  /* <i className="absolute text-orange opacity-20 -rotate-6 xs:right-12 sm:right-20 lg:right-24 -top-2 text-[5rem] fa-regular fa-comments"></i> */
}
