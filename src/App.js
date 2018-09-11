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
// import BookListMain from './containers/bookList/BookListMain';
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
  }
]

const App = () => (
  <Router>
  
  <div>
  
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
          </Route>
        ))
      }
    </div>
    </div>
    </div>
  </Router>
);

export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const App = () => 
//   return(
//     <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li>
//           <Link to="/netflix">Netflix</Link>
//         </li>
//         <li>
//           <Link to="/zillow-group">Zillow Group</Link>
//         </li>
//         <li>
//           <Link to="/yahoo">Yahoo</Link>
//         </li>
//         <li>
//           <Link to="/modus-create">Modus Create</Link>
//         </li>
//       </ul>
  
//       <Route path="/:id" component={Child} />
  
//       {/*
//          It's possible to use regular expressions to control what param values should be matched.
//             * "/order/asc"  - matched
//             * "/order/desc" - matched
//             * "/order/foo"  - not matched
//       */}
//       <Route
//         path="/order/:direction(asc|desc)"
//         component={ComponentWithRegex}
//       />
//     </div>
//   </Router>
//   )
  
// };

// const Child = ({ match }) => (
//   console.log({match}),
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// );

// const ComponentWithRegex = ({ match }) => (
//   console.log({match}),
//   <div>
//     <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//   </div>
// );
// export default App