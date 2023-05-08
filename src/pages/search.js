import SearchHeader from '@/components/SearchHeader';
import Head from 'next/head'
import React from 'react'
import response from '@/utils/dummyRes'
import { useRouter } from 'next/router';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

const search = ({results}) => {
  const router = useRouter();
  const query = router.query.query;
  console.log(results);

  return (
    <div className='h-screen'>
    <Head>
        <title>{query} - Google Search..</title>
    </Head>

    <SearchHeader />

    <SearchResults results={results} />

    <Footer home="search"/>
    </div>
  )
}

export default search

export async function getServerSideProps(context){

  const useDummyData = true;
  const startIndex = context.query.star || "0";

  const data = useDummyData ? response : 
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}
  &q=${context.query.query}&start=${startIndex}`)
  .then(res => res.json());

  return {
    props:{
      results : data
    }
  }
}