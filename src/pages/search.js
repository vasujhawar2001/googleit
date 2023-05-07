import SearchHeader from '@/components/SearchHeader';
import Head from 'next/head'
import React from 'react'

const search = () => {
    const query = 0;
  return (
    <div>
    <Head>
        <title>{query} - Search Results</title>
    </Head>

    <SearchHeader />
    </div>
  )
}

export default search