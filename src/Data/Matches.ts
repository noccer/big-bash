import * as moment from 'moment';

import { Ground } from './GroundData';
import { Team } from './TeamData';
import { RAW_DATA } from './RawData';

// const BACKEND_TIME_FORMAT = 'YYYY-MM-DD HH:mm Z';

export interface Match {
    matchNumber: number;
    date: Date;
    ground: Ground;
    homeTeam: Team;
    awayTeam: Team;
    ladies: boolean;
}

export const MATCHES: Match[] = [];

const generateDateFromStrings = (date: string, time: string, ground: Ground): Date => {
    const dateString: string = `${date} ${time}:00+${ground.state.timeZone}00`;
    return moment(dateString).toDate();
};

const generateMatchesData = (matchNo: number, date: string, time: string, homeTeam: Team, awayTeam: Team, ground: Ground): Match => {
    const match: Match = {
        matchNumber: matchNo,
        date: generateDateFromStrings(date, time, ground),
        ground,
        homeTeam,
        awayTeam,
        ladies: false
    };
    return match;
};

RAW_DATA.forEach(match => {
    MATCHES.push(generateMatchesData(match[0] as number, match[1] as string, match[2] as string, match[3] as Team, match[4] as Team, match[5] as Ground));
});
