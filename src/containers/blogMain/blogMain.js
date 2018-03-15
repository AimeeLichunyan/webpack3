/**
*博客的Mainr组件
*@author AimeeLi
*@time 2017-09-09
**/
import React, { Component } from 'react';
import MainLogo from './MainLogo';
import BlogMajor from './BlogMajor';
import './main.scss';
import Zmage from 'react-zmage';

class BlogMain extends Component {
	constructor(props) {
		super(props)
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
    
	}
	render() {
		return(
			<div className="blog-wrap">
        
				<BlogMajor />

			</div>
		)
	}
}

export default BlogMain
