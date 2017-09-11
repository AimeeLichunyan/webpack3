/**
*博客的路由文件
*@author AimeeLi
*@time 2017-09-09
**/

import React, { Component } from 'react';
import BlogMain from './containers/blogMain/BlogMain'

export default class App extends Component {
  render() {
    return(
      <div>
        <BlogMain/>
      </div>
    )
  }
}
