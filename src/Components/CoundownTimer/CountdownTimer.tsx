import * as React from 'react';
import * as moment from 'moment';

import './CountdownTimer.css';

import CountdownTimerItem from './CountdownTimerItem';

import TimeUtil, {
    Countdown
} from '../../Utils/TimeUtil';

interface CountdownTimerProps {
    eventTime: moment.Moment;
}

interface CountdownTimerState {
    countdown : Countdown;
}

export default class CountdownTimer extends React.Component <CountdownTimerProps,
CountdownTimerState> {
    public timer = () => setInterval(() => this.tick(), 1000);

    constructor(props : CountdownTimerProps) {
        super(props);
        this.state = {
            countdown: TimeUtil.generateCountdown(this.props.eventTime)
        };
    }

    shouldComponentUpdate(nextProps: CountdownTimerProps, nextState: CountdownTimerState) {
        if (this.state.countdown.seconds === nextState.countdown.seconds) {
            return false;
        } else {
            return true;
        }
    }

    componentDidMount() {
        this.timer();
    }

    componentWillUnmount() {
        clearInterval(this.timer());
    }

    render() {
        const countdown = this.state.countdown;
        return (
            <div className="feature__countdown_timer">
                <CountdownTimerItem value={countdown.days.toString()} label="days"/>
                <CountdownTimerItem value={countdown.hours.toString()} label="hours"/>
                <CountdownTimerItem value={countdown.minutesString} label="minutes"/>
                <CountdownTimerItem value={countdown.secondsString} label="seconds"/>
            </div>
        );
    }

    private tick() {
        this.setState({
            countdown: TimeUtil.generateCountdown(this.props.eventTime)
        });
    }
}
