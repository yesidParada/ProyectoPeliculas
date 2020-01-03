import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import MovieCatalog from '../../components/MovieCatalog';
import Footer from '../../components/Footer';
import { url, key, lng } from '../../utils/contants';
import './Search.scss';

function Search(props){
  const { history, location } = props;
  const [ movieList, setMovieList ] = useState([]);
  const [ searchValue, setSearchValue ] = useState("");

  useEffect(() => {
    
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;

      const response = await fetch(`${url}/search/movie?api_key=${key}&language=${lng}&query=${s}&page=1`);

      const movies = await response.json();
      setMovieList(movies);
      setSearchValue(s);
    })();
  }, [location.search]);

  const onChangeSearch = e =>{
    const urlParams = queryString.parse(location.search);

    urlParams.s = e.target.value; 
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);

  }
  
  return(
    <Row >
      <Col span={12} offset={6} className="Search">
        <h1>Buscar Peliculas</h1>
        <Input value={searchValue} onChange={onChangeSearch}/>
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer/>
      </Col>
    </Row>
  );
}

export default withRouter(Search);