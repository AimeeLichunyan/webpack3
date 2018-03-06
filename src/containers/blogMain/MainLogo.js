/**
*博客的左侧logo部分
*@author AimeeLi
*time 2017-10-14
**/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class MainLogo extends Component {
  render () {
    return (
      <div className="logo-main">
        <div className="logo-header">
          <div className="logo-img">
            <img src="../../images/logo.jpg" />

          </div>

        </div>
        <div className="blog-intr">
          <h2>我的博客</h2>
          <ul>
            <li className="blog-go"><Link to={'/home'}>首页</Link></li>
            <li className="blog-go"><Link to={'/blogActive'}>所有文章</Link></li>
            <li className="blog-go"><Link to={'/bookList'}>书单</Link></li>
            <li className="blog-go"><Link to={'/aboutMe'}>关于我</Link></li>
          </ul>
        </div>

      </div>
    )
  }
}
