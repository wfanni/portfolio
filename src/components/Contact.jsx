import { forwardRef, useRef, useState, useEffect } from "react";

const Contact = forwardRef(function Contact({}, ref) {
  const [isCopied, setIsCopied] = useState(false);
  const emailRef = useRef();

  function handleBlur(e) {
    if (emailRef.current && !emailRef.current.contains(e.target)) {
      setIsCopied(false);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText("fanniwihl@gmail.com");
    setIsCopied(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleBlur, true);
    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="contact h-screen w-full pt-16 pb-32 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] -mt-16 uppercase">Contact me</h2>
      <div className="relative xs:w-4/5 lg:w-1/2 flex justify-center items-center gap-12">
        <div className="xs:hidden lg:flex w-full h-full flex-col justify-between items-end">
          <span className="min-h-[45px] w-fit py-2 px-4 pt-[0.6rem] leading-[inherit]">
            Send me an email:
          </span>
          <span className="min-h-[45px] w-fit py-2 px-4 pt-[0.6rem] leading-[inherit] py-2 px-4">
            Find me on Linkedin:
          </span>
          <span className="min-h-[45px] w-fit py-2 px-4 pt-[0.6rem] leading-[inherit] py-2 px-4">
            Check out my GitHub:
          </span>
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-12">
          <div className=" w-full flex xs:justify-center lg:justify-between">
            <span
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
                  isCopied
                    ? "text-orange opacity-100"
                    : "opacity-0"
                } xs:absolute xs:top-[50%] xs:translate-y-[-50%] xs:right-2 pl-2 lg:leading-[1] group-hover:opacity-100 transition-all duration-200 fa-regular fa-copy`}
              ></i>
            </span>
            <i className="absolute text-orange opacity-20 rotate-6 xs:left-8 sm:left-16 lg:left-24 -top-2 text-[5rem] fa-regular fa-envelope"></i>
          </div>
          <div className="relative w-full flex xs:justify-center lg:justify-between">
            <a
              className="justify-self-start z-10 py-2 px-4 pt-[0.6rem] text-center border-2 border-transparent hover:border-orange hover:text-orange rounded-full transition-all duration-200"
              href="https://linkedin.com/in/fanni-wihl"
              target="_blank"
            >
              Linkedin
            </a>
            <i className="absolute text-orange opacity-20 -rotate-6 xs:right-12 sm:right-20 lg:right-24 -top-2 text-[5rem] fa-regular fa-comments"></i>
          </div>
          <div className="relative w-full flex xs:justify-center lg:justify-between">
            <a
              className="z-10 py-2 px-4 pt-[0.6rem] text-center border-2 border-transparent hover:border-orange hover:text-orange rounded-full transition-all duration-200"
              href="https://github.com/wfanni"
              target="_blank"
            >
              Github
            </a>
            <i className="absolute text-orange opacity-20 -rotate-12 xs:left-8 sm:left-28 lg:-left-24 xs:bottom-0 sm:-bottom-8 lg:-bottom-8 text-[5rem] fa-solid fa-code"></i>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
