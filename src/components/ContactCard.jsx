export default function ContactCard({ logo, profile, link, version }) {
  const headline = (
    <label className="text-[0.9rem]">
      Frontend Developer 👩‍💻 Innoveo | React & UI/UX Enthusiast | Globetrotter 🌍
    </label>
  );
  const CTAbutton = (
    <button
      className={`h-[32px] leading-[31px] px-[0.8rem] text-[1rem] text-dark font-poppins font-semibold border-2  rounded-full transition-all duration-300 ${
        version === "github"
          ? "border-[#bfb1e3] hover:bg-[#bfb1e333] hover:border-[#8878b3]"
          : "border-slate-300 hover:bg-slate-100 hover:border-slate-400"
      }`}
    >
      <a href={link} target="_blank">
        View profile
      </a>
    </button>
  );
  return (
    <div className="w-full flex flex-col xs:justify-center lg:justify-between rounded-[25px] bg-white shadow-lg">
      <div
        className={`h-[45] flex items-center gap-2 rounded-t-[25px] indent-1 p-[0.7rem] ${
          version === "github" ? "bg-[#bfb1e3]" : "bg-slate-300"
        }`}
      >
        {version === "github" ? (
          <i className="text-[1.4rem] fa-brands fa-github"></i>
        ) : null}
        <img
          className="h-[1.3rem]"
          src={logo}
          alt={version === "github" ? "github logo" : "linkedin logo"}
        />
      </div>
      <div
        className={`flex ${
          version === "linkedin" ? "flex-col" : null
        } gap-4 p-4`}
      >
        <div
          className={`${
            version === "linkedin"
              ? "w-full flex justify-between items-center"
              : null
          }`}
        >
          <img
            className="w-[52px] h-[52px] rounded-full object-cover"
            src={profile}
            alt={
              version === "github"
                ? "github profile picture"
                : "linkedin profile picture"
            }
          />
          {version === "linkedin" ? CTAbutton : null}
        </div>
        <div className="flex flex-col">
          <label className="text-[1.1rem]">
            {version === "github" ? "wfanni" : "Fanni Wihl"}
          </label>
          {version === "linkedin" ? headline : null}
          {version === "github" ? CTAbutton : null}
        </div>
      </div>
    </div>
  );
}
