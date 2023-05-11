import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[20%] lg:pl-[10%] md:ml-0'>
      <p className='text-gray-500 dark:text-gray-400 text-xs mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.searchTime} seconds)
      </p>

      <div>
        {results.items?.map((item) => {
          return (
            <div key={item.link} className='max-w-xl mb-8'>
              <div className='group'>
                <a
                  href={item.link}
                  className='text-gray-800 dark:text-white text-xs'
                >
                  {item.formattedUrl}
                </a>
                <a href={item.link}>
                  <h2 className='line-clamp-1 text-md text-blue-700 dark:text-blue-400 font-medium group-hover:underline'>
                    {item.title}
                  </h2>
                </a>
              </div>
              <p className='flex-wrap text-gray-500 dark:text-gray-400 text-xs line-clamp-3'>
                {item.snippet}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
