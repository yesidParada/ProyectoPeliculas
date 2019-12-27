import React from 'react';
import { Row, Col } from 'antd';
import useFetch from '../hooks/useFetch';
import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import { url, key, lng } from '../utils/contants';

export default function Home(){
  
  const newMovies = useFetch(`${url}/movie/now_playing?api_key=${key}&language=${lng}&page=1`);
  const popularMovies = useFetch(`${url}/movie/popular?api_key=${key}&language=${lng}&page=1`);
  const topMovies = useFetch(`${url}/movie/top_rated?api_key=${key}&language=${lng}&page=1`);
  
  return(
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas Populares" movies={popularMovies}/>
        </Col>
        <Col span={12}>
          <MovieList title="Top Mejores Películas" movies={topMovies}/> 
        </Col>
      </Row>
      <Footer/>
    </>
  );
}