import React from 'react';
import MovieResultsList from '../../components/MovieResultsList';

export default async function SearchResultPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error('Error fetching data!');
  }

  const data = await res.json();

  const searchResults = data.results;

  return (
    <div>
      {searchResults && searchResults.length === 0 && (
        <h1 className='text-center pt-6'>No results matched your search</h1>
      )}

      {searchResults && <MovieResultsList results={searchResults} />}
    </div>
  );
}
