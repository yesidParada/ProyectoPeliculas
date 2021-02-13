import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { urlImg } from '../../utils/contants';
import { EyeFilled } from '@ant-design/icons';
import './MovieCatalog.scss';

export default function MovieCatalog(props){
  const { movies:{
    results
  }} = props;
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {
        results.map(movie => (
          <Col key={movie.id} span={6} xs={4} className="MovieCatalog">
            <MovieCard movie={movie} />
          </Col>
        ))
      }
    </Row>
  );
  // return results.map(movie => (
  //     <Col key={movie.id} span={6} xs={4} className="MovieCatalog">
  //       <MovieCard movie={movie} />
  //     </Col>
  // ));
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
        actions={[<EyeFilled />]}
        >
        <Meta title={title}/>
      </Card>
    </Link>
  );
}