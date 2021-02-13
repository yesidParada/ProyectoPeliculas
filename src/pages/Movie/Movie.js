/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Row, Col, Button, Rate } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import { url, key, lng, urlImg } from '../../utils/contants';
import Loading from '../../components/Loading';
import ModalVideo from '../../components/ModalVideo';
import { PlayCircleOutlined } from '@ant-design/icons';

import './Movie.scss';
export default function Movie(){
  const { id } = useParams();

  const movieInfo = useFetch(`${url}/movie/${id}?api_key=${key}&language=${lng}`);
  
  if (movieInfo.loanding || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo.result}/>;
}

function RenderMovie(props) {
  const { movieInfo: {
    backdrop_path,
    poster_path
  } } = props;

  const posterPath = `${urlImg}${backdrop_path}`;
  return(
    <div
      className="Movie"
      style={{ backgroundImage: `url('${posterPath}')`}}
    >
      <div className="MovieDark"/>
      <Row>
        <Col span={8} offset={3} className="MoviePoster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="MovieInfo">
          <MovieInfo movieInfo={props.movieInfo}/>
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie(props){
  const { image } = props;
  const imagePath = `${urlImg}${image}`;
  return(
    <div style={{ backgroundImage: `url('${imagePath}')`}}/>
  );
}

function MovieInfo(props){
  const {movieInfo:{
    id,
    release_date,
    overview,
    genres,
    title,
    vote_average
  }} = props;

  const [ isVisibleModal, setIsVisibleModal] = useState(false);

  const videoMovie = useFetch(`${url}/movie/${id}/videos?api_key=${key}&language=${lng}`);

  const openModal = () => setIsVisibleModal(true)

  const closeModal = () => setIsVisibleModal(false)

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return(
          <>
            <Button icon={<PlayCircleOutlined />} onClick={openModal}>
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        );
        
      }
    }
  }
  return (
    <>
      <div className="MovieInfoHeader">
        <h1>
          {title} 
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div className="MovieInfoBody">
        <h3>Calificación</h3>
        <Rate disabled  defaultValue={vote_average} count={10} />
        <h3>Descripcion</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map(obj => (
            <li key={obj.id}> {obj.name} </li>
          ))}
        </ul>
      </div>    
    </>
  );
}