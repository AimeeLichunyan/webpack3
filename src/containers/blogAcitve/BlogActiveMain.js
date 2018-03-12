/**
*博客的Mainr组件
*@author AimeeLi
*@time 2018-03-05
**/
import React, { Component } from "react"
import BlogActiveAll from "./BlogActiveAll"
import "./BlogActive.scss"


class BlogActiveMain extends Component {
	render() {
		return(
			<div className="blog-wrap">
        <BlogActiveAll />
			</div>
		)
	}
}

export default BlogActiveMain
