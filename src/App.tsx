import * as React from 'react';
import './App.css';
// import '../node_modules/materialize-css/dist/css/materialize.min.css';

import Nav from './Components/Nav/Nav';
import NavOverlay from './Components/Nav/NavOverlay';
import Body from './Components/Body/Body';

import {matchData} from './Data/Data';
import {Match} from './Data/Matches';

const AppPropsData = {
    // tslint:disable-next-line
    title: "WhenIsBigBashOn.com"
};

interface AppProps {

}

interface AppState {
    navOpen: boolean;
    matches: Match[];
    selectedMatch: Match;
}
export default class App extends React.Component <AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            navOpen: false,
            matches: matchData,
            selectedMatch: matchData[0]
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.selectMatch = this.selectMatch.bind(this);
    }

    render() {
        return (
            <div className="app">
                <Nav
                    onToggleNav={this.toggleNav}
                    navOpen={this.state.navOpen}
                    matches={this.state.matches}
                    onSelectMatch={this.selectMatch}
                    selectedMatch={this.state.selectedMatch}
                />
                <Body
                    match={this.state.selectedMatch}
                    title={AppPropsData.title}
                />
                <NavOverlay onClick={this.toggleNav} navOpen={this.state.navOpen}/>
            </div>
        );
    }

    private toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    private selectMatch(match: Match) {
        this.setState({
            selectedMatch: match
        });
        this.toggleNav();
    }
}