/**
*博客的Mainr组件
*@author AimeeLi
*@time 2018-03-05
**/
import React, { Component } from "react";
// import MainLogo from './MainLogo';
import AboutMeIntro from "./AboutMeIntro"
import "./AboutMe.scss";
import AboutMeTech from "./AboutMeTech"
// import Zmage from 'react-zmage';

class AboutMe extends Component {
	render() {
		return(
			<div className="blog-wrap"> 
				<AboutMeTech />
				<AboutMeIntro />
			</div>
		)
	}
}

export default AboutMe
