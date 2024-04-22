import { forwardRef } from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin-logo.png";
import gitProfile from "../assets/github-profile.png";
import linkedinProfile from "../assets/wf-small.png";
import EmailForm from "./EmailForm";
import ContactCard from "./ContactCard";

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
        <div className="xs:w-full lg:w-3/5 flex flex-col justify-between items-start gap-12">
          <ContactCard
            logo={github}
            profile={gitProfile}
            link="https://github.com/wfanni"
            version="github"
          />
          <ContactCard
            logo={linkedin}
            profile={linkedinProfile}
            link="https://www.linkedin.com/in/fanni-wihl/"
            version="linkedin"
          />
        </div>
      </div>
    </section>
  );
});

export default Contact;
