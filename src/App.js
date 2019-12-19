import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Header className="men">
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home/>
            </Route>
            <Route path="/new-movie" exact={true}>
              <NewMovie/>
            </Route>
            <Route path="/popular" exact={true}>
              <Popular/>
            </Route>
            <Route path="/search" exact={true}>
              <Search/>
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie/>
            </Route>
            <Route path="*">
              <Error404/>
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}
