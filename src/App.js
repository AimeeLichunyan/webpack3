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
import BlogActiveMain from './containers/blogAcitve/BlogActiveMain'

const routers = [
  {
    path: '/home',
    exact: true,
    main: () => <div> <BlogMain /></div>
  },{
    path: '/BlogActiveMain',
    exact: false,
    main: () => <div><BlogActiveMain /></div>
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
          />

          
        ))
      }
    </div>
    <div>
      {
        routers.map((route,index) => (
          console.log(route),
          <Route
          key={index}
          path={route.path}
          component={route.main}
          >
          </Route>
        ))
      }
    </div>
    </div>
    </div>
  </Router>
)
// export default class App extends Component {
//   render() {
//     return(
//       <div>
//         <BlogMain/>
//       </div>
//     )
//   }
// }
export default App
