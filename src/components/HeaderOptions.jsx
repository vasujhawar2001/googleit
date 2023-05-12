import React, { useState } from 'react';
import HeaderOption from './HeaderOption';
import { MapIcon, NewspaperIcon, PhotoIcon, PlayIcon } from '@heroicons/react/24/outline';

const HeaderOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (title) => {
    setSelectedOption(title);
  };

  return (
    <div className='flex w-full text-gray-700 dark:text-gray-300 mt-1 lg:justify-start justify-center lg:space-x-24 lg:pl-32 border-b-[1px]'>
      <div className="flex space-x-6 items-center">
        <HeaderOption
          Icon={PhotoIcon}
          title="All"
          selected={selectedOption === "All"}
          onClick={() => handleOptionClick("All")}
        />
        <HeaderOption
          Icon={PhotoIcon}
          title="Images"
          selected={selectedOption === "Images"}
          onClick={() => handleOptionClick("Images")}
        />
        <HeaderOption
          Icon={PlayIcon}
          title="Videos"
          selected={selectedOption === "Videos"}
          onClick={() => handleOptionClick("Videos")}
        />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          selected={selectedOption === "News"}
          onClick={() => handleOptionClick("News")}
        />
        <HeaderOption
          Icon={MapIcon}
          title="Maps"
          selected={selectedOption === "Maps"}
          onClick={() => handleOptionClick("Maps")}
        />
        <HeaderOption
          Icon={PhotoIcon}
          title="More"
          selected={selectedOption === "More"}
          onClick={() => handleOptionClick("More")}
        />
      </div>
    </div>
  );
};

export default HeaderOptions;
