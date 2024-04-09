import { forwardRef } from "react";

const Skills = forwardRef(function Skills({}, ref) {
  return (
    <section
      ref={ref}
      className="min-h-screen h-fit flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] uppercase">Skills</h2>
      <div className="w-3/4 mx-auto flex justify-between items-center">
        <div className="w-full flex flex-col items-center justify-start gap-12">
          <div className="w-3/4 flex items-center gap-4">
            <label className="min-w-24">HTML</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[95%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="w-3/4 flex items-center gap-4">
            <label className="min-w-24">CSS (SCSS)</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[95%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="w-3/4 flex items-center gap-4">
            <label className="min-w-24">JS</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[70%] before:pl-4 before:bg-orange"></span>
          </div>
          <div className="w-3/4 flex items-center gap-4">
            <label className="min-w-24">REACT</label>
            <span className="relative inline-block w-full h-4 bg-slate-300 text-white leading-[3rem] before:content-[''] before:absolute before:h-4 before:w-[50%] before:pl-4 before:bg-orange"></span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-12">
          <div className="w-3/4 flex flex-wrap items-center justify-center gap-4">
            <label>Node.js</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Git</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>TailwindCSS</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Figma</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Jira</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>MongoDB</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Postman</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Express.js</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Illustrator</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>VS Code</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Confluence</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Wordpress</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Azure DevOps</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Jest</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Webpack</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>SourceTree</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>Docker</label>
            <i className="text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
            <label>WooCommerce</label>
          </div>
        </div>
      </div>
      <p className="flex flex-col gap-4 items-center justify-center">
        <span className="min-w-[200px] w-[200px] text-center border-b-2 border-orange">
          Current Goals:
        </span>
        <span>
          Mastering React.js & learn Vue.js and Angular - improve Wordress
          skills and learn Shopify
        </span>
      </p>
    </section>
  );
});

export default Skills;
