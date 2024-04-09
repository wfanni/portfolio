import me from '../assets/me2.jpg';
import line1 from '../assets/line1.svg';
import { forwardRef } from 'react';

const About = forwardRef(function About({}, ref) {
    console.log(ref.current)
    return (
        <section ref={ref} className="min-h-screen h-fit pt-16 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">About Me</h2>
            <div className="flex justify-center items-center gap-24">
                <div className="w-2/5 text-justify flex flex-col gap-4">
                    <p>Hi there! I'm Fanni, a Frontend developer who's enthusiastic about taking on challenges and opportunities for learning. Since I first dabbled in coding I realized that creating user friendly interfaces is my passion.</p>
                    <p>I am driven by my desire to constantly learn and grow personally. I enjoy working on projects that help me enhance my skills and discover emerging technologies. My ultimate aim is to develop user experiences that have a positive impact.</p>
                    <p>My dream is to live and work in an environment where I can pursue both of my passions; Frontend Development and Travel. Meeting people excites me and I strongly believe that a supportive team is crucial for success.</p>
                    <p>I am eager to see what the future holds for me and ready to confront any obstacles head on! I am open to opportunities, collaborations and expanding my skill set so please don't hesitate to reach out if you found me interesting.</p>
                    <p>Thanks for stopping by. Can’t wait to connect with you!</p>
                </div>
                <div className="relative w-1/3">
                    <img className="about w-full" src={me} alt="image-of-me"/>
                    <img className="absolute top-8 left-4 w-1/3 rotate-12 " src={line1} alt="decoration" />
                    <img className="absolute bottom-8 -right-12 w-2/5 -rotate-[60deg]" src={line1} alt="decoration" />
                    <i className=" absolute top-28 left-8 text-5xl text-orange fa-solid fa-circle"></i>
                    <i className=" absolute bottom-0 left-80 text-7xl text-orange fa-regular fa-circle"></i>
                    <i className=" absolute top-56 -right-8 text-8xl text-orange fa-solid fa-circle"></i>
                </div>
            </div>
        </section>
    )
})

export default About