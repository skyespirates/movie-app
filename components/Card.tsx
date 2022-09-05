import React from "react";
// components
import Thumbnail from "./Thumbnail";
// types
type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};
const Card = ({ imgUrl, title, subtitle }: Props) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumbnail imgUrl={imgUrl} />
      <div className="absolute bottom-0 w-full px-4 py-2 rounded-b-xl bg-zinc-800">
        <h2 className="text-sm text-center truncate text-cyan-200">{title}</h2>
        {subtitle ? (
          <p className="text-xs text-center truncate text-cyan-400">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
