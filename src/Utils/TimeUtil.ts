import * as moment from 'moment';

export const MATCH_DURATION_HOURS = 3;

export interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    minutesString: string;
    seconds: number;
    secondsString: string;
}

class TimeUtil {
    public generateCountdown(time: moment.Moment): Countdown {
        const now = moment();

        const days: number = time.diff(now, 'days');

        const hours: number = Math.floor(time.diff(now, 'hours') % days);

        const minutes: number = Math.floor(time.diff(now, 'minutes') % ((days * 24) + hours));
        const minutesString: string = ('0' + minutes).substr(-2);

        const seconds: number = Math.floor(time.diff(now, 'seconds') % ((days * 24 * 60) + (hours * 60) + minutes));
        const secondsString: string = ('0' + seconds).substr(-2);

        const countdown: Countdown = {
            days,
            hours,
            minutes,
            minutesString,
            seconds,
            secondsString
        };

        return countdown;
    }
}

export default new TimeUtil();