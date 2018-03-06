/**
*博客的路由文件
*@author AimeeLi
*@time 2017-09-09
**/

import React, { Component } from 'react';
import './containers/assets/resect.scss';
import 'antd/dist/antd.css'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainLogo from './containers/blogMain/MainLogo'
import BlogMain from './containers/blogMain/BlogMain';
import BlogActiveMain from './containers/blogAcitve/BlogActiveMain';
import BookListMain from './containers/bookList/BookListMain';
import AboutMe from './containers/aboutMe/AboutMe'

const routers = [
  {
    path: '/',
    exact: true,
    main: () => <div> <BlogMain /></div>
  },
  {
    path: '/home',
    exact: true,
    main: () => <div> <BlogMain /></div>
  },{
    path: '/blogActive',
    main: () => <div><BlogActiveMain /></div>
  },
  {
    path: '/bookList',
    main: () => <div><BookListMain /></div>
  },{
    path: '/aboutMe',
    main: () => <div><AboutMe /></div>
  },
]

const App = () => (
  <Router>
  
  <div>
  <Link to="/topics">Topics</Link>
  <MainLogo/>
  <div className="blog-major">
    <div>
      {
        routers.map((route,index) => (
          
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          >
          </Route>,
          <Route path="/topics" component={Topics} />
        ))
      }
    </div>
    </div>
    </div>
  </Router>
);
// ,
          // <Route path="/topics" component={Topics} />
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default App
