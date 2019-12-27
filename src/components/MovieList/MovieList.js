import React from 'react';
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { urlImg } from '../../utils/contants';
import Loading from '../Loading';
import './MovieList.scss';

export default function MovieList(props) {
  const { title, movies } = props;
  
  if (movies.loanding || !movies.result) {
    return <Loading/>;
  }
 
  return(
    <List 
      className="MovieList" 
      size="default"
      header={<h2>{ title }</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={movie =><RenderMovie movie={movie}/>}
    />
  );
};

function RenderMovie(props){
  const { movie:{ id, title, poster_path} } = props;
  const backdropPath = `${urlImg}${poster_path}`;
  return (
    <List.Item className="MovieListMovie">
      <List.Item.Meta
        avatar={<Avatar src={backdropPath}/>}
        title={<Link to={`/movie/${id}`}>{ title }</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon="right"/>
      </Link>
    </List.Item>
  );
}