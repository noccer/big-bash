export interface Team {
    name: TeamName;
    imageUrl: string;
}

enum TeamName {
    Heat = 'Brisbane Heat',
    Hurricanes = 'Hobart Hurricanes',
    Renegades = 'Melbourne Renegades',
    Scorchers = 'Perth Scorchers',
    Sixers = 'Sydney Sixers',
    Stars = 'Melbourne Stars',
    Strikers = 'Adelaide Strikers',
    Thunder = 'Sydney Thunder'
}

const imagePath = '../img';

const heat: Team = {
    name: TeamName.Heat,
    imageUrl: `${imagePath}/heat.png`
};
const hurricanes: Team = {
    name: TeamName.Hurricanes,
    imageUrl: `${imagePath}/hurricanes.png`
};
const renegades: Team = {
    name: TeamName.Renegades,
    imageUrl: `${imagePath}/renigades.png`
};
const scorchers: Team = {
    name: TeamName.Scorchers,
    imageUrl: `${imagePath}/scorchers.png`
};
const sixers: Team = {
    name: TeamName.Sixers,
    imageUrl: `${imagePath}/sixers.png`
};
const stars: Team = {
    name: TeamName.Stars,
    imageUrl: `${imagePath}/stars.png`
};
const strikers: Team = {
    name: TeamName.Strikers,
    imageUrl: `${imagePath}/strikers.png`
};
const thunder: Team = {
    name: TeamName.Thunder,
    imageUrl: `${imagePath}/thunder.png`
};

export const TEAM = {
    heat,
    hurricanes,
    renegades,
    scorchers,
    sixers,
    stars,
    strikers,
    thunder
};