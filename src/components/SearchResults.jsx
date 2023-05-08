import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[20%] lg:pl-[10%] ml-11 md:ml-0'>
        <p className='text-gray-500 text-xs mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results ( {results.searchInformation?.searchTime} seconds)
        </p>

        <div>
            {results.items?.map((item) => {
                return (
                    <div key={item.link} className='max-w-xl mb-8'>
                        <div className='group'>
                        <a href={item.link} className='text-gray-800 hover:text-blue-500 text-sm'>
                            {item.formattedUrl}
                        </a>
                        <a href={item.link}>
                            <h2 className='truncate text-md text-blue-700
                            font-medium group-hover:underline'>
                                {item.title}
                            </h2>
                        </a>
                        </div>
                        <p className='text-gray-500 text-xs'>{item.snippet}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SearchResults