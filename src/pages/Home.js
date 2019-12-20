import React from 'react';
import useFetch from '../hooks/useFetch';
import SliderMovies from '../components/SliderMovies';
import { url, key, lng } from '../utils/contants';

export default function Home(){
  
  const newMovies = useFetch(`${url}/movie/now_playing?api_key=${key}&language=${lng}&page=1`);
  return(
    <>
      <SliderMovies movies={newMovies} />
      <h1>Hello from Home</h1>
    </>
  );
}