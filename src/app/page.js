import Results from '@/components/Results';
import React from 'react';
import ErrorComponent from '@/app/ErrorComponent';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  let url;

  if (genre === 'fetchTopRated') {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new ErrorComponent('Failed to fetch data');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
