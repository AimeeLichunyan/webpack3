/**
*博客的Mainr组件
*@author AimeeLi
*@time 2018-03-12
**/
import React, { Component } from 'react';
// import MainLogo from './MainLogo';
import AboutMeIntro from "./AboutMeIntro";
// import './main.scss';
// import Zmage from 'react-zmage';

class AboutMeTech extends Component {
	render() {
		return(
			<div classNameName="blog-wrap"> 
				<div className="content">
					<div className="content__container">
						<p className="content__container__text">
                            我知道的技术
						</p>
              
						<ul className="content__container__list">
							<li className="content__container__list__item">js !</li>
							<li className="content__container__list__item">es6 !</li>
							<li className="content__container__list__item">vue !</li>
							<li className="content__container__list__item">react !</li>
                            
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutMeTech
