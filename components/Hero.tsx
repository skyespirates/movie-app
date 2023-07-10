import React from "react";
import Image from "next/image";
// types
type Props = {
  imgUrl: string;
  title: string;
  text: string;
};
const Hero = ({ imgUrl, title, text }: Props) => {
  return (
    <div className="relative w-full h-128">
      <div className="relative flex flex-col-reverse h-full max-w-7xl m-auto z-20 pb-12 text-center md:text-left">
        <div className="text-white max-w-2xl px-4">
          <h2 className="text-2xl md:text-5xl font-bold pb-8">{title}</h2>
          <p className="text-lg md:text-xl">{text}</p>
        </div>
      </div>
      <div className="w-full h-full bg-black absolute z-10 top-0 opacity-50"></div>
      <Image
        priority
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={imgUrl}
        alt="hero-image"
      />
    </div>
  );
};

export default Hero;
