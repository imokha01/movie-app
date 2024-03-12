import data from '../data.json';
import Card from './Card';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import Trailers from './Trailers';

const CardList = ({ title, unfiltered, rating }) => {
  const [file] = useState(data.movies);
  const {id} = useParams()
  // const { id } = useParams(file.id);
  console.log(file.id);
  console.log(id);

  // Find the movie with the specified id
  const movie = file.find((movie) => movie.id == id);

  // Check if the movie with the specified id exists


  return (
    <div className='flex flex-wrap justify-around mt-[2rem] '>
      {unfiltered &&
        file.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Card key={movie.id} {...movie} />
          </Link>
        ))}

{title &&
  file
    .filter((movie) => movie.title.toLowerCase() === title.toString().toLowerCase())
    .map((filteredMovie) => (
      <Card key={filteredMovie.id} {...filteredMovie} />
    ))}


      {rating &&
        file.map((movie) => {
          if (parseInt(movie.rating) === rating) {
            return <Card key={movie.id} {...movie} />;
          }
        })}

      {/* Render Trailers component with the trailerURL */}
      <Trailers className="hidden" trailerURL={movie?.trailerURL} />
    </div>
  );
};

export default CardList;
