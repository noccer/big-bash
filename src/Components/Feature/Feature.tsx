import * as React from 'react';
import * as moment from 'moment';

import CountdownTimer from '../CoundownTimer/CountdownTimer';

import {Match} from '../../Data/Matches';
import {
    UI_DATE_FORMAT,
    UI_TIME_FORMAT
} from '../../Utils/DateUtil';
import TimeUtil from '../../Utils/TimeUtil';

import './Feature.css';

export interface FeatureProps {
    match : Match;
}

export default class Feature extends React.PureComponent <FeatureProps> {
    constructor(props : FeatureProps) {
        super(props);
        this.state = {
            countdown: TimeUtil.generateCountdown(moment(this.props.match.date))
        };
    }

    render() {
        const match = this.props.match;
        const time = moment(match.date).utcOffset(match.ground.state.timeZone * 60).local();

        return (
            <div className="feature card">
                <div className="feature__heading">Game {match.matchNumber}</div>
                <div className="feature__teams">
                    <p>{match.homeTeam.name}</p>
                    <p>-vs-</p>
                    <p>{match.awayTeam.name}</p>
                </div>
                <p>{match.ground.name.toString()}</p>
                <p>{match.ground.state.name.toString()}</p>
                <div className="feature__date_time">
                    <div className="feature__date">
                        <div className="feature__date_value">{time.format(UI_DATE_FORMAT)}</div>
                    </div>
                    <div className="feature__time">
                        <div className="feature_time_value">{time.format(UI_TIME_FORMAT)}</div>
                        <div className="feature__time_label">(Your time)</div>
                    </div>
                </div>
                <CountdownTimer eventTime={moment(match.date)} />
            </div>
        );
    }
}
