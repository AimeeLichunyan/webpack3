/**
*博客的Mainr组件
*@author AimeeLi
*@time 2017-09-09
**/
import React, { Component } from 'react';
import BlogHeader from './mainHeader';
import './main.scss'

class BlogMain extends Component {
  render() {
    return(
      <div>
        <BlogHeader/>
      </div>
    )
  }
}

export default BlogMain
