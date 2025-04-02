import { useState } from "react";
import { useTranslation } from "react-i18next";
import social from "../assets/social-hero.svg";
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

import ReactPlayer from 'react-player'
import ReelsGallery from "./ReelsGallery";

export default function SocialMedia ({ pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-screen h-fit w-full pb-40 flex flex-col justify-center items-end">
      <div className="w-full flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={social} className="w-full h-[550px] scale-[106%] object-cover"/>
          <h2 className="w-fit mt-8 text-[2.6rem] uppercase">
            Social Media Content Creation & Marketing
          </h2>
        </div>
        <div className="w-full  items-start justify-center gap-10">
          <ReelsGallery />
        </div>

      </div>
    </section>
  );
};
