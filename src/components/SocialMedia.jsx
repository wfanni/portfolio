import { useState } from "react";
import { useTranslation } from "react-i18next";
import social from "../assets/social-hero.svg";
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

import ReactPlayer from 'react-player'
import ReelsGallery from "./ReelsGallery2";

export default function SocialMedia ({ pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-screen h-fit w-full pb-40 flex flex-col justify-center items-end">
      <div className="w-full flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={social} className="w-full h-[570px] object-cover"/>
          <h2 className="w-fit mt-4 text-[2.6rem] uppercase">
            Social Media Content Creation & Marketing
          </h2>
        </div>
        <div className="w-full items-start justify-center gap-10">
          <div className="w-[400px] absolute right-[14.5rem] text-justify flex flex-col gap-12">
            <h2>
              Some of my recent reels and videos for Instagram and Tiktok. For now these are personal hobby videos, I would love to improve in this area and create more and different kinds of videos as well. I'm hoping to work in a position in the future where I could film reels and use them in the company's marketing to drive engagement and get clients.
            </h2>
            <h2>
              My goal is to create engaging, authentic, visually pleasing videos that match the beats and the vibe music I'm selecting for them.
            </h2>
          </div>
          <ReelsGallery />
          <div className="w-[400px] -mt-[25rem] absolute left-[19.5rem] text-justify flex flex-col justify-center items-center gap-16">
            <h2 className="w-fit">
              Find me on Instagram & Tiktok!
            </h2>
            <div className="flex justify-around gap-20">
              <a href="https://www.instagram.com/lovelydkl/" className="group hover:scale-110 transition-all duration-200"><i className="fa-brands fa-instagram text-[4rem] text-dark group-hover:text-orange transition-all duration-200"></i></a>
              <a href="https://www.tiktok.com/@lovelydkl_" className="group hover:scale-110 transition-all duration-200"><i className="fa-brands fa-tiktok text-[4rem] text-dark group-hover:text-orange transition-all duration-200"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
