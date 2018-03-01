/**
*blog主要内容的list组件
*@author AimeeLi
*@time 2014-10-14
**/

import React, { Component } from 'react';
import 'animate.css';

export default class MajorList extends Component {
  render() {
    return(
      <div className="BlogMajor-wrap ">
        <article>
          <section>
            <header>
              <h2>react初始学习的</h2>
            </header>
          </section>
          <section className="article-main">
            上个月3月3号的时候，同事推荐说买可以0元购买斐讯K2路由器，看办公室人员有几个买了，博主也半信半疑的尝试买了一个，试试看是不是真的能返还钱。截止今天，钱终于退回来了。所以才敢给大家推荐，顺便给大家详细介绍下流程。
          </section>
          <section className="article-label">
            <span>rect学习系列</span>
            
            <button className="article-all">阅读全文 >></button>
          </section>
        </article>
      </div>
    )
  }
}
