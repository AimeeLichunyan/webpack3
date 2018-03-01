/**
*blog右边主要部分
*@author AimeeLi
*time 2017-10-14
**/

import React, { Component } from 'react';
import { Pagination } from 'antd'
import MajorList from './MajorList';
export default class BlogMajor extends Component {
  render() {
    return(
      <div className="blog-major">
        <MajorList />
        <MajorList />
        <MajorList />
        <MajorList />
        <MajorList />
        <MajorList />
        <Pagination showQuickJumper defaultCurrent={2} total={500}  />
      </div>
    )
  }
}
