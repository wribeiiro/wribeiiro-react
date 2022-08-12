import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Header() {
	const imgProfile = "https://avatars.githubusercontent.com/u/20648572?s=460&u=47a55caca6dbc315d1932aaf77eefa20b2002baf&v=4";

	return (
		<Fragment>
			<div className="sidebar show">
				<div className="sidebar__avatar">
					<div className="text-center me">
						<img src={imgProfile} alt="Me" title="Me" />
						<h1 className="name text-center">Wellisson Ribeiro</h1>
						<span className="description text-vue"> PHP Software Engineer ~</span>
						<span className="description"> English Student </span>
						<br/>
						<select name="selectLanguage" id="selectLanguage">
							<option value={'eu'} defaultValue={1}>🇺🇸 English</option>
							<option value={'pt'}> 🇧🇷 Portuguese</option>
						</select>
					</div>
				</div>
				<ul>
					<Link to="/" className="btn mr-5"> &#62; Home </Link>
					<Link to="/education" className="btn mr-5"> &#62; Education </Link>
					<Link to="/skills" className="btn mr-5"> &#62; Skills &amp; Experience </Link>
					<Link to="/works" className="btn mr-5"> &#62; Works and Projects </Link>
					<Link to="/contact" className="btn mr-5"> &#62; Contact </Link>
				</ul>
			</div>
		</Fragment>
  	);
}

export default Header;