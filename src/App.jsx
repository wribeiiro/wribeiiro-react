import React, { useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from './pages/Home';
import EducationPage from './pages/Education';
import SkillXpPage from './pages/SkillXp';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import Header from './components/Header';
import TranslationContext from './context/TranslationContext';

import translateJsonEn from './data/en.json';
import translateJsonPtBr from './data/pt-br.json';

import './App.css';

const App = () => {
    const [translation, setTranslation] = useState({});

    const translations = {
        'en': translateJsonEn,
        'pt-br': translateJsonPtBr
    }

    const checkTranslationFromStorage = () => {
        let storageTranslation = localStorage.getItem("wribeiiro-translation");

        if (!storageTranslation) {
            setTranslationInStorage('en');
            return;
        }

        setTranslationInStorage(storageTranslation);
    }

    const getOptionTranslationFromStorage = () => {
        return localStorage.getItem("wribeiiro-translation");
    }

    const getTranslationFromStorage = () => {
        return translations[getOptionTranslationFromStorage()];
    }

    const setTranslationInStorage = (value) => {
        localStorage.setItem("wribeiiro-translation", value);
        setTranslation(translations[value]);
    }

    useEffect(() => {
        console.log(translateJsonPtBr);
        checkTranslationFromStorage();
    }, []);

	return (
        <Router>
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
        </Router>
	);
}

export default App;
