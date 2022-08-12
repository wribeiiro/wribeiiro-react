import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import HomePage from './pages/Home';
import Education from './pages/Education';
import SkillXp from './pages/SkillXp';
import Work from './pages/Work';
import Contact from './pages/Contact';
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
                        <Route path='/education' component={Education} />
                        <Route path='/skills' component={SkillXp} />
                        <Route path='/works' component={Work} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
            </div>
        </Router>
	);
}

export default App;
