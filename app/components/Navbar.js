import NavItem from './NavItem';

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-700 bg-amber-400 lg:text-lg p-4">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
