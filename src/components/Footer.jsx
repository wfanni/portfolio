import { useTranslation } from "react-i18next";
import storyset from "../assets/storyset-logo-dark.svg";
import bee from "../assets/bee-logo-dark.svg";
import freepik from "../assets/freepik-logo-dark.svg";

export default function Footer ({ pathname }) {
    return (
        <div className="w-full h-20 bg-orange-secondary p-6 font-normal text-dark text-[1rem] absolute bottom-0 z-10 flex justify-between items-center">
            <div className="flex gap-2">
                <p className="h-fit">2025 | developed by wfanni |</p>
                <div className="mt-[2px] flex items-center gap-4">
                    <a href="https://www.instagram.com/lovelydkl/" className="hover:scale-110 transition-all duration-200"><i className="fa-brands fa-instagram text-[1.2rem] text-dark"></i></a>
                    <a href="https://www.tiktok.com/@lovelydkl_" className="hover:scale-110 transition-all duration-200"><i className="fa-brands fa-tiktok text-[1.2rem] text-dark"></i></a>
                    <a href="https://www.linkedin.com/in/fanni-wihl/" className="hover:scale-110 transition-all duration-200"><i className="fa-brands fa-linkedin-in text-[1.2rem] text-dark"></i></a>
                </div>
            </div>
            <div className="flex gap-2">
                <p className="h-fit mr-2">illustrations from:</p>
                <div className="-mt-1 flex items-center gap-4">
                    <a className="group" href="https://storyset.com/online"><img src={storyset} className="w-6 inline-block group-hover:scale-110 transition-all duration-200"/></a>
                    <a className="group" href="https://mockupbee.com/"><img src={bee} className="w-10 inline-block group-hover:scale-110 transition-all duration-200"/></a>
                    <a className="group" href="https://www.freepik.com/"><img src={freepik} className="w-16 inline-block group-hover:scale-110 transition-all duration-200"/></a>
                </div>
            </div>
        </div>
    );
};

