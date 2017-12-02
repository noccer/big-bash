import {
    State,
    STATE
} from './StateData';

enum GroundName {
    Adelaide = 'Adelaide Oval',
    Blundstone = 'Blundstone Arena',
    Etihad = 'Etihad Stadium',
    Gabba = 'Gabba',
    GMHBA = 'GMHBA Stadium',
    Manuka = 'Manuka Oval',
    MCG = 'MCG',
    SCG = 'SCG',
    Spotless = 'Spotless Stadium',
    Traeger = 'Traeger Park',
    UniTas = 'University of Tasmania Stadium',
    Waca = 'WACA',
}

export interface Ground {
    name: GroundName;
    state: State;
    imageUrl: string;
}

const adelaide: Ground = {
    name: GroundName.Adelaide,
    state: STATE.sa,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Adelaide_Oval_%2823183793744%29.jpg'
};
const blundstone: Ground = {
    name: GroundName.Blundstone,
    state: STATE.tas,
    imageUrl: 'https://www.bigbash.com.au/-/media/News/2017/08/21BlundstoneArena.ashx?mw=1200'
};
const etihad: Ground = {
    name: GroundName.Etihad,
    state: STATE.vic,
    imageUrl: 'https://cd.visitmelbourne.com/-/media/atdw/melbourne/things-to-do/entertainment/spectator-sports/original__9520272_dc37_157854528_mozrk3u_1600x900.jpg?ts=20161117590821&amp;cp=95&w=1200'
};
const gabba: Ground = {
    name: GroundName.Gabba,
    state: STATE.qld,
    imageUrl: 'https://www.cricket.com.au/-/media/News/2017/03/20Gabba.ashx'
};
const gmhba: Ground = {
    name: GroundName.GMHBA,
    state: STATE.vic,
    imageUrl: 'https://www.cricket.com.au/-/media/News/2017/09/1Geelong-KP.ashx'
};
const manuka: Ground = {
    name: GroundName.Manuka,
    state: STATE.vic,
    imageUrl: 'https://www.cricket.com.au/news/manuka-oval-test-cricket-bellerive-oval-blundstone-arena-hobart-2018-19-sri-lanka/~/media/51CA7745D58D4AC186C33A7D062A97FC.ashx'
};
const mcg: Ground = {
    name: GroundName.MCG,
    state: STATE.vic,
    imageUrl: 'https://www.bigbash.com.au/-/media/News/2016/01/17MCG.ashx'
};
const scg: Ground = {
    name: GroundName.SCG,
    state: STATE.nsw,
    imageUrl: 'https://www.sporttechie.com/wp-content/uploads/2017/11/GettyImages-463171944.jpg'
};
const spotless: Ground = {
    name: GroundName.Spotless,
    state: STATE.nsw,
    imageUrl: 'https://www.sydneythunder.com.au/-/media/sydneythundercomau/Images/Pages/spotless.ashx?mw=1200'
};
const traeger: Ground = {
    name: GroundName.Traeger,
    state: STATE.nt,
    imageUrl: 'https://www.cricketaustralia.com.au/-/media/News/2015/05/13NT.ashx'
};
const uniTas: Ground = {
    name: GroundName.UniTas,
    state: STATE.tas,
    imageUrl: 'https://pbs.twimg.com/media/DIiTD5uVYAI5iae.jpg'
};
const waca: Ground = {
    name: GroundName.Waca,
    state: STATE.wa,
    imageUrl: 'https://www.bigbash.com.au/-/media/News/2017/01/21crowd.ashx?mw=1200'
};

export const GROUND = {
    adelaide,
    blundstone,
    etihad,
    gabba,
    gmhba,
    manuka,
    mcg,
    scg,
    spotless,
    traeger,
    uniTas,
    waca
};