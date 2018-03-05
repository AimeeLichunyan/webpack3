/**
*blog右边主要部分
*@author AimeeLi
*time 2017-10-14
**/

import React, { Component } from 'react';
import { Pagination } from 'antd'
import MajorList from './MajorList';
export default class BlogMajor extends Component {
  constructor(props) {
    super(props)
  }
  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }
  render() {
    return(
      <div >
        <section>
          <MajorList />
          <MajorList />
          <MajorList />
          <MajorList />
          <MajorList />
          <MajorList />
        </section>
        <section className="pageWrap">
          <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onChange} />
        </section>
        
      </div>
    )
  }
}
