import React from 'react';
import { Layout } from 'antd';
import { Router, Routes , Route } from 'react-router-dom';
import MenuTop from './components/MenuTop';

// Pages
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Movie from './pages/Movie';
import NewMovie from './pages/NewMovie';
import Popular from './pages/Popular';
import Search from './pages/Search';

export default function App() {
  const {Header, Content} = Layout;
  return (
    <Layout>
      <Router>
        <Header className="men" style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content>
          <Routes >
            <Route path="/" component={Home} exact={true}>
            </Route>
            <Route path="/new-movie" component={NewMovie} exact={true}>
            </Route>
            <Route path="/popular" component={Popular} exact={true}>
            </Route>
            <Route path="/search" component={Search} exact={true}>
            </Route>
            <Route path="/movie/:id" component={Movie} exact={true}>
            </Route>
            <Route path="*" component={Error404}>
            </Route>
          </Routes >
        </Content>
      </Router>
    </Layout>
  );
}
