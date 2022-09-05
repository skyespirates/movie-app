import Link from "next/link";
// types
type Props = {
  title: string;
};

const Breadcrumb = ({ title }: Props) => (
  <div className="bg-zinc-800">
    <div className="flex items-center p-4 m-auto text-lg text-white max-w-7xl">
      <Link href="/">
        <span className="duration-300 cursor-pointer hover:opacity-80">
          Home
        </span>
      </Link>
      <span className="block px-2">|</span>
      <span className="font-bold truncate">{title}</span>
    </div>
  </div>
);

export default Breadcrumb;
