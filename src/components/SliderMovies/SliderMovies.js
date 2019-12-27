import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import { urlImg } from '../../utils/contants';
import Loading from "../Loading";
import './SliderMovies.scss';

export default function SliderMovies(props){
  const { movies } = props;
 
  if (movies.loanding || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return(
    <Carousel autoplay className="SliderMovies">
      {results.map( movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props){
  const {movie:{
    id,
    backdrop_path,
    title, overview
  }} = props;

  const backdropPath = `${urlImg}${backdrop_path}`;
  return (
    <div
      className="SliderMoviesMovie"
      style={{ backgroundImage: `url('${backdropPath}')`}}
    >
      <div className="SliderMoviesMovie-Info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver mas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}