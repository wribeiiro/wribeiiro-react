import React from 'react';
import { Fragment } from 'react';

import Home from '../../components/Home';

function HomePage() {
    const bg = 'https://www.wribeiiro.com/bg-min.jpg';

    return (
        <Fragment>
            <section className="home">
                <div className="banner">
                    <Home
                        background={bg}
                        text={"text"}
                        secText={"secondText"}
                        aboutText={"aboutMe"}
                        terminalTitle={"root@wribeiiro: ~"}
                    >
                    </Home>
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;