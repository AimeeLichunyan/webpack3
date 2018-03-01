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
            <li className="blog-go">首页</li>
            <li className="blog-go">所有文章</li>
            <li className="blog-go">书单</li>
          </ul>
        </div>

      </div>
    )
  }
}
