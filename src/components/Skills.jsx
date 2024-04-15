import { forwardRef } from "react";

const Skills = forwardRef(function Skills({}, ref) {
  const skills = [
    "Node.js",
    "Git",
    "TailwindCSS",
    "Figma",
    "Browserstack",
    "Jira",
    "MongoDB",
    "Postman",
    "Express.js",
    "Illustrator",
    "VS Code",
    "Confluence",
    "Wordpress",
    "Azure DevOps",
    "Jest",
    "Webpack",
    "SourceTree",
    "WooCommerce",
    "Docker",
  ];

  return (
    <section
      ref={ref}
      className="bg-skills xs:bg-cover lg:bg-[length:100%] bg-no-repeat xs:bg-[center_bottom_-26rem] md:bg-[center_bottom_-20rem] lg:bg-bottom min-h-screen h-fit xs:pt-16 lg:pt-0 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] uppercase">Skills</h2>
      <div className="xs:w-4/5 lg:w-3/4 mx-auto flex justify-between items-center xs:flex-col lg:flex-row xs:gap-16 lg:gap-0">
        <div className="w-full flex flex-col items-center justify-start xs:gap-8 lg:gap-12">
          <div className="xs:w-full lg:w-3/4 flex items-center gap-4">
            <label className="min-w-24">HTML</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[95%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="xs:w-full lg:w-3/4 flex items-center gap-4">
            <label className="min-w-24">CSS (SCSS)</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[95%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="xs:w-full lg:w-3/4 flex items-center gap-4">
            <label className="min-w-24">JS</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[70%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="xs:w-full lg:w-3/4 flex items-center gap-4">
            <label className="min-w-24">REACT</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[50%] before:pl-4 before:bg-orange"></span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-12">
          <div className="xs:w-full lg:w-3/4 flex flex-wrap items-center justify-center gap-4">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <span key={index}>
                    <label>{skill}</label>
                    <i className="ml-4 text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
      <p className="xs:w-4/5 lg:w-full flex flex-col gap-4 items-center justify-center">
        <span className="min-w-[200px] w-[200px] text-center border-b-2 border-orange">
          Current Goals:
        </span>
        <span className="text-center">
          Mastering React.js & learn Vue.js and Angular - improve Wordress
          skills and learn Shopify
        </span>
      </p>
    </section>
  );
});

export default Skills;
