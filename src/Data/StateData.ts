type TimeZone = 8 | 9.5 | 10 | 10.5 | 11;

enum StateName {
    ACT = 'Australian Capital Territory',
    NSW = 'New South Wales',
    NT = 'Northern Territory',
    QLD = 'Queensland',
    SA = 'South Australia',
    TAS = 'Tasmania',
    VIC = 'Victoria',
    WA = 'West Australia',
    UNKNOWN = 'To Be Confirmed'
}

export interface State {
    name: StateName;
    timeZone: TimeZone;
}

const act: State = {
    name: StateName.ACT,
    timeZone: 11
};
const nsw: State = {
    name: StateName.NSW,
    timeZone: 11
};
const nt: State = {
    name: StateName.NT,
    timeZone: 9.5
};
const qld: State = {
    name: StateName.QLD,
    timeZone: 10
};
const sa: State = {
    name: StateName.SA,
    timeZone: 10.5
};
const tas: State = {
    name: StateName.TAS,
    timeZone: 11
};
const vic: State = {
    name: StateName.VIC,
    timeZone: 11
};
const wa: State = {
    name: StateName.WA,
    timeZone: 8
};

export const STATE = {
    act,
    nsw,
    nt,
    qld,
    sa,
    tas,
    vic,
    wa
};