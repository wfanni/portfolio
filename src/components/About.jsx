import me from '../assets/me2.jpg';
import line1 from '../assets/line1.svg';
import { forwardRef } from 'react';

const About = forwardRef(function About({}, ref) {
    console.log(ref.current)
    return (
        <section ref={ref} className="h-screen py-24 pt-80 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">About Me</h2>
            <div className="flex justify-center items-center gap-24">
                <div className="w-2/5 text-justify flex flex-col gap-4">
                    <p>Hey there! I'm Fanni, a passionate Frontend developer with a strong desire to delve into new challenges and learning opportunities. From the moment I dipped my toes into the world of coding, I knew I had found my calling in crafting beautiful and intuitive user interfaces.</p>
                    <p>My motivation lies in the continuous pursuit of knowledge and personal growth. I love taking on new projects that allow me to expand my skills and explore new technologies. My goal is always to create captivating and functional user experiences that make a difference.</p>
                    <p>I dream of the opportunity to live and work in an international setting, so I can honor my two main passions at once; Frontend Development and Travel. I love meeting new people and a I believe a good team is essential to success.</p>
                    <p>I'm excited for what the future holds, and I'm ready to tackle any challenges that come my way! I'm always open to new opportunities, collaborations and to expand my skill set, so feel free to reach out to me to discuss how we can work together.</p>
                    <p>Thanks for stopping by, and I look forward to connecting with you soon!</p>
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