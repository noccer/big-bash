import * as React from 'react';
// import * as moment from 'moment';

import './Body.css';

import { Match } from '../../Data/Matches';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

export interface BodyProps {
    match: Match;
    title: string;
}

interface BodyState {
    duration: number;
}

export default class Body extends React.PureComponent<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            duration: 0
        };
    }

    render() {
        const match = this.props.match;
        return (
            <div className="body">
                <div className="body__content">
                    <h4 className="body__title card">
                        {this.props.title}
                    </h4>
                    <Feature match={match} />
                    <Footer />
                </div>
                <div className="body__img_container">
                    <img className="body__img" src={match.ground.imageUrl} alt={match.ground.name}/>
                </div>
            </div>
        );
    }

    // private tick() {
    //     const now = moment();
    //     const matchTime = moment(this.props.match.date ? this.props.match.date : undefined);
    //     const diff = matchTime.diff(now);
    //     this.setState({
    //         duration: diff
    //     });
    // }

    // private renderCountdown() {
    //     return (
    //         <div>
    //             {setInterval(this.tick, 1000)}
    //         </div>
    //     )
    // }
}