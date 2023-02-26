import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';

export default function MovieCard({ result }) {
  return (
    <div className='cursor-pointer p-2 hover:shadow-slate-400 shadow-md rounded-md border border-slate-400 m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt='image is not available'
          className='sm:rounded-t-md group-hover:opacity-80 transition-opacity duration-200'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <div className='p-2'>
          <p className='line-clamp-3 text-sm mb-2'>{result.overview}</p>
          <h2 className='truncate text-lg font-bold'>
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}{' '}
            <FiThumbsUp className='h-5 mr-1 ml-4 mb-1' /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
