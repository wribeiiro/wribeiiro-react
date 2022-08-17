import React from 'react';
import { Fragment } from 'react';

import Home from '../../components/Home';

function HomePage() {
    const data = {
        background: 'https://www.wribeiiro.com/bg-min.jpg',
        centerText: "Full Stack Developer",
        terminalTitle: "root@wribeiiro: ~"
    }

    return (
        <Fragment>
            <section className="home">
                <div className="banner">
                    <Home
                        background={data.background}
                        centerText={data.centerText}
                        terminalTitle={data.terminalTitle}
                        aboutText={data.terminalTitle}
                    >
                    </Home>
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;
