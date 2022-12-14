import Link from "next/link";
import Image from "next/image";
// components
import SearchInput from "./SearchInput";
// types
type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};
const Header = ({ setQuery }: Props) => {
  return (
    <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
      <div className="flex justify-between items-center w-full h-full max-w-7xl px-4 m-auto">
        <Link href="/">
          <div className="flex item-center cursor-pointer">
            <div className="invisible md:visible">
              <Image
                width="150"
                height="50"
                src="/rmdb-logo.svg"
                alt="rmdb-logo"
              />
            </div>
            <div className="md:invisible pt-2 absolute">
              <Image
                width="42"
                height="42"
                src="/rmdb-logo-small.svg"
                alt="rmdb-logo-small"
              />
            </div>
          </div>
        </Link>
        {setQuery ? (
          <div className="relative flex items-center">
            <SearchInput setQuery={setQuery} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
