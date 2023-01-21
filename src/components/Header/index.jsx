import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TranslationContext from "../../context/TranslationContext";
import './style.css';

export default function Header() {
    const {
        getTranslationFromStorage,
        getOptionTranslationFromStorage,
        setTranslationInStorage
    } = useContext(TranslationContext);

    const [language, setLanguage] = useState('en');
    const { menu } = getTranslationFromStorage();

    const saveLanguage = (event) => {
        setTranslationInStorage(event.target.value);
        setLanguage(event.target.value);
        window.location.reload();
    }

    useEffect(() => {
        setLanguage(getOptionTranslationFromStorage());
    }, []);

	return (
		<Fragment>
			<div className="sidebar show">
				<div className="sidebar__avatar">
					<div className="text-center me">
						<img src={menu.info.avatar} alt="Me" title="Me" />
						<h1 className="name text-center">{menu.info.firstText}</h1>
						<span className="description text-red">{menu.info.secondText}</span>
						<br/>
						<select name="selectLanguage" id="selectLanguage" onChange={saveLanguage} value={language}>
                            {menu.info.languageOptions.map((value, index) => {
                               return <option key={index} value={value.value} defaultValue={language === value.value}>{value.name}</option>;
                            })}
						</select>
					</div>
				</div>
				<ul>
                    {menu.items.map((value, index) => {
                        return <Link key={index} to={value.route} className="btn mr-5"> &#62; {value.name} </Link>;
                    })}
				</ul>
			</div>
		</Fragment>
  	);
}
