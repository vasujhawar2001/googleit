import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { getRandom } from "@/utils/getRandom";
import { randomFacts } from "@/constants/randomFacts";

const Footer = () => {
  const feelingAwesome = () => {
    // console.log(getRandom(randomFacts));
    window.open(getRandom(randomFacts).url);
  };

  return (
    <footer className="footer fixed-bottom">
      <div className={`flex flex-row px-4 py-1 justify-between`}>
        <div className="flex items-center">
          <GlobeAltIcon className={`h-6 hover:animate-spin mr-2 link`} />
          <a onClick={feelingAwesome} className="link text-sm">
            India
          </a>
        </div>
        <div>
          <p>Built with</p>
          <a className="link" href="https://nextjs.org/">
            NEXT.js
          </a>{" "}
          and{" "}
          <a className="link" href="https://tailwindcss.com/">
            TailwindCSS
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start px-2 py-2 ">
        <a href="https://www.linkedin.com/in/vasu-jhawar/" className="link">
          LinkedIn
        </a>
        <a href="https://github.com/vasujhawar2001" className="link">
          GitHub
        </a>
        <a href="https://twitter.com/JhawarVasu" className="link">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
