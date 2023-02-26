import MovieCard from './MovieCard';

export default function MovieResultsList({ results }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
}
