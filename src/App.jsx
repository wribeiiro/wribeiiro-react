import React from 'react';
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

import './App.css';

const App = () => {
	return (
        <Router>
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
        </Router>
	);
}

export default App;
