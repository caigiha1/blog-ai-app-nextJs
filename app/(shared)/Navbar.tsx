import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-stone-900 text-white px-10 py-4">
        <div className="hidden sm:block">Social Link</div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mb-5 mt-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Blog towards dedicated the future AI and generation and job
            automation
          </p>
        </div>
        <div className="basis-full w-auto relative h-32 bg-gray-400">
          <Image src={2} alt="image" />
        </div>
      </div>
      <hr className="border-gray-400 mx-10" />
    </header>
  );
};

export default Navbar;
