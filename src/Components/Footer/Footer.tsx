import * as React from 'react';

import FooterAdvert from '../Adverts/FooterAdvert';

import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__details card">
                    <span>
                        <a href="http://transportmelbourne.com" target="_blank">
                            TransportMelbourne.com
                        </a>
                    </span>
                    <span className="footer__pipe">|</span>
                    <span>
                        <a href="http://viewpro.com.au" target="_blank">
                            ViewPro
                        </a>
                    </span>
                    <span className="footer__pipe">|</span>
                    <span>
                        <a href="https://au.linkedin.com/in/niall-o-callaghan-webdev" target="_blank">
                            Niall O'Callaghan
                        </a>
                    </span>
                    <span className="footer__pipe">|</span>
                    <span>
                        <a href="https://twitter.com/noccer" target="_blank">
                            @noccer
                        </a>
                    </span>
                </div>
                <FooterAdvert />
            </div>
        );
    }
}
