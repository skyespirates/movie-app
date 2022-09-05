import Image from "next/image";
import React from "react";

// types
type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => (
  <Image
    placeholder="blur"
    blurDataURL="/placeholder.jpg"
    className="rounded-lg"
    layout="fill"
    objectFit="cover"
    src={imgUrl}
    alt="thumbnail"
  />
);

export default Thumbnail;
