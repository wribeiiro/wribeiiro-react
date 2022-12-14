import React, { useState, useEffect} from 'react';
import {
    Switch,
    Route,
    HashRouter
} from 'react-router-dom';

import HomePage from './pages/Home';
import EducationPage from './pages/Education';
import SkillXpPage from './pages/SkillXp';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import Header from './components/Header';
import TranslationContext from './context/TranslationContext';
import './App.css';

export default function App() {
    const [translation, setTranslation] = useState(null);

    const getOptionTranslationFromStorage = () => {
        return localStorage.getItem("wribeiiro-translation");
    }

    const getTranslationFromStorage = () => {
        return translation;
    }

    const setTranslationInStorage = async (value) => {
        await fetchTranslation(value);
        localStorage.setItem("wribeiiro-translation", value);
    }

    const fetchTranslation = async () => {
        let translation = localStorage.getItem("wribeiiro-translation") ?? 'en';

        const endpoint = process.env.NODE_ENV === 'development'
            ? process.env.REACT_APP_DEVELOPMENT_DOMAIN
            : process.env.REACT_APP_PRODUCTION_DOMAIN;

        await fetch(`${endpoint}/data/${translation}.json`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            setTranslation(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchTranslation();
    }, []);

	return translation && (
        <HashRouter>
            <TranslationContext.Provider
                value={{
                    translation,
                    getOptionTranslationFromStorage,
                    getTranslationFromStorage,
                    setTranslationInStorage
                }}
            >
                <div className="wrapper">
                    <Header />
                    <div className="main_content">
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/education' component={EducationPage} />
                            <Route path='/skills' component={SkillXpPage} />
                            <Route path='/works' component={WorkPage} />
                            <Route path='/contact' component={ContactPage} />
                        </Switch>
                    </div>
                </div>
            </TranslationContext.Provider>
        </HashRouter>
	);
}
