import React from 'react';
import { Col, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { urlImg } from '../../utils/contants';

import './MovieCatalog.scss';

export default function MovieCatalog(props){
  const { movies:{
    results
  }} = props;
  return results.map(movie => (
      <Col key={movie.id} xs={4} className="MovieCatalog">
        <MovieCard movie={movie} />
      </Col>
  ));
}

function MovieCard(props){
  const {movie:{
    id, title, poster_path
  }} = props;
  const { Meta } = Card;

  const Poster = `${urlImg}${poster_path}`;
  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={Poster}/>}
        actions={[<Icon type="eye" key="eye"/>]}
        >
        <Meta title={title}/>
      </Card>
    </Link>
  );
}