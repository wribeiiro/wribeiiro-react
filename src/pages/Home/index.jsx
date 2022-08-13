import React from 'react';
import { Fragment } from 'react';

import Home from '../../components/Home';

function HomePage() {
    const data = {
        background: 'https://www.wribeiiro.com/bg-min.jpg',
        smallText: "Wellisson Ribeiro",
        smallSecondText: "PHP Software Engineer",
        terminalTitle: "root@wribeiiro: ~"
    }

    return (
        <Fragment>
            <section className="home">
                <div className="banner">
                    <Home
                        background={data.background}
                        text={data.smallSecondText}
                        secText={data.smallSecondText}
                        aboutText={data.smallSecondText}
                        terminalTitle={data.terminalTitle}
                    >
                    </Home>
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;