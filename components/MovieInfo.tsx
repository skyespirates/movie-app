import Image from "next/image";
// helpers
import { calcTime, convertMoney } from "../helpers";
//components
import Thumbnail from "./Thumbnail";
import Pill from "./Pill";
// types
import { Crew } from "../api/types";
type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
  genres: { id: number; name: string }[];
  spoken_languages: { english_name: string }[];
};
const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
  genres,
  spoken_languages,
}: Props) => (
  <div className="relative w-full h-auto p-4">
    <div className="relative z-10 flex flex-col h-full p-4 m-auto min-h-128 md:flex-row max-w-7xl rounded-xl bg-zinc-800 bg-opacity-90">
      <div className="relative w-full h-96 md:h-auto md:w-1/3">
        <Thumbnail imgUrl={thumbUrl} />
        <div className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-black bg-white rounded-full top-4 left-4">
          {rating}
        </div>
      </div>
      <div className="w-full px-0 py-4 text-center text-white md:py-0 md:text-left md:px-8 mud:w-2/3">
        <h2 className="pb-4 text-2xl font-bold md:text-4xl">{title}</h2>
        <p>
          {year} &#8226; {spoken_languages[0].english_name}
        </p>
        <div>
          {genres.map((genre) => (
            <Pill key={genre.id} text={genre.name} />
          ))}
        </div>
        <h3 className="text-lg font-bold">Summary</h3>
        <p className="mb-8 text-sm md:text-lg">{summary}</p>
        <div>
          <div>
            <h3 className="text-lg font-bold">
              Director{directors.length > 1 ? "s" : ""}
            </h3>
            <div>
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Movie data</h3>
            <Pill className="ml-0" text={`Duration: ${calcTime(time)}`} />
            <Pill text={`Budget: ${convertMoney(budget)}`} />
            <Pill text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={backgroundImgUrl}
      alt="thumbnail"
    />
  </div>
);

export default MovieInfo;
