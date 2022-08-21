import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types'; // ES6
import parse from "html-react-parser";
import './style.css';

export default function Terminal({ terminalInfo }) {
    const [writer, setWriter] = useState("");
    const [aboutComplete, setAboutComplete] = useState("");
    const [increment, setIncrement] = useState(0);

    const calculateMyYear = (strReplacer) => {
        return strReplacer.replace("{myyear}", (new Date()).getFullYear() - 1996);
    }

    const typeWriter = () => {
        setAboutComplete("");
        if (increment < terminalInfo.sudoCommand.length) {
            const timeOut = setTimeout(() => {
                setWriter(previousValue => previousValue + `<span class="text-text">${terminalInfo.sudoCommand.charAt(increment)}</span>`);
                setIncrement(previousValue => previousValue + 1);
                clearTimeout(timeOut);
            }, 120);
        }

        setAboutComplete(terminalInfo.userRoot + writer);

        if (increment === terminalInfo.sudoCommand.length) {
            setTimeout(() => {
                setAboutComplete(calculateMyYear(terminalInfo.aboutComplete) + terminalInfo.userRootBlink);
            }, 1000);
        }
    }

    useEffect(() => {
        typeWriter();
    }, [increment]);

	return (
		<Fragment>
			<div className="terminal fade-in">
				<div className="terminal-bar">
					<div className="btns">
						<span className="circle red"></span>
						<span className="circle yellow"></span>
						<span className="circle green"></span>
					</div>
					<div className="terminal-title">{terminalInfo.userRoot}</div>
				</div>
				<pre className="body">{parse(aboutComplete)}</pre>
			</div>
		</Fragment>
	);
}

Terminal.propTypes = {
	terminalInfo: PropTypes.object.isRequired
}
