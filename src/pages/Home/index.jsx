import React, { Fragment,  useContext } from 'react';
import TranslationContext from "../../context/TranslationContext";
import Home from '../../components/Home';

export default function HomePage() {

    const {
        getTranslationFromStorage,
    } = useContext(TranslationContext);

    const { pages: { home } } = getTranslationFromStorage();

    return (
        <Fragment>
            <section className="home">
                <div className="banner">
                    <Home
                        background={home.info.banner.background}
                        centerText={home.info.banner.secondText}
                        terminalInfo={home.info.terminal}
                    >
                    </Home>
                </div>
            </section>
        </Fragment>
    );
}
