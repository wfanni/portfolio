import me from '../assets/about-img.png';
import { forwardRef } from 'react';

const About = forwardRef(function About({}, ref) {
    console.log(ref.current)
    return (
        <section ref={ref} className="min-h-screen h-fit pt-16 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">About Me</h2>
            <div className="flex justify-center items-center sm:gap-24 xs:gap-12 xs:flex-col-reverse sm:flex-row">
                <div className="xs:w-4/5 sm:w-2/5 xs:mb-16 sm:mb-0 text-justify flex flex-col gap-4">
                    <p>Hi there! I'm Fanni, a Frontend developer who's enthusiastic about taking on challenges and opportunities for learning. Since I first dabbled in coding I realized that creating user friendly interfaces is my passion.</p>
                    <p>I am driven by my desire to constantly learn and grow personally. I enjoy working on projects that help me enhance my skills and discover emerging technologies. My ultimate aim is to develop user experiences that have a positive impact.</p>
                    <p>My dream is to live and work in an environment where I can pursue both of my passions; Frontend Development and Travel. Meeting people excites me and I strongly believe that a supportive team is crucial for success.</p>
                    <p>I am eager to see what the future holds for me and ready to confront any obstacles head on! I am open to opportunities, collaborations and expanding my skill set so please don't hesitate to reach out if you found me interesting.</p>
                    <p>Thanks for stopping by. Can’t wait to connect with you!</p>
                </div>
                <div className="relative xs:w-4/5 sm:w-1/3">
                    <img src={me} alt="image-of-me"/>
                </div>
            </div>
        </section>
    )
})

export default About