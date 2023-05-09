import SearchHeader from '@/components/SearchHeader';
import Head from 'next/head'
import React from 'react'
import response from '@/utils/dummyRes'
import { useRouter } from 'next/router';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import PaginationButtons from '@/components/PaginationButtons';

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

const search = ({results}) => {
  const router = useRouter();
  const term = router.query.term;
  
  // console.log(results);

  return (
    <div className='h-screen'>
    <Head>
        <title>{`${term} - Google Search..`}</title>
    </Head>

    <SearchHeader />

    <SearchResults results={results} />

    <PaginationButtons />

    <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps({query}){

  const useDummyData = true;
  const startIndex = query.start || "0";

  const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query.query}&start=${startIndex}`)
  .then(res => res.json());

  return {
    props:{
      results : data
    }
  }
}