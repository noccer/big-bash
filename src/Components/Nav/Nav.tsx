import * as React from 'react';
import * as classNames from 'classnames';

import {Match} from '../../Data/Matches';

import './Nav.css';

interface NavProps {
    navOpen: boolean;
    matches: Match[];
    selectedMatch: Match;
    onToggleNav: () => void;
    onSelectMatch: (match: Match) => void;
}

export default class Nav extends React.PureComponent<NavProps> {
    constructor(props: NavProps) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.onSelectMatch = this.onSelectMatch.bind(this);
    }

    render() {
        const sideNavStyles = this.props.navOpen ?
            { transform: 'translateX(0px)' } :
            { transform: 'translateX(-100%)'};

        return (
            <div className="nav">
                <a className="nav__toggle" onClick={this.toggleNav}>
                    <i className="nav__toggle_icon material-icons">menu</i>
                </a>
                <div style={sideNavStyles} className="nav__menu">
                    <ul>
                        <li onClick={this.toggleNav}>
                            <a href="#">
                                <i className="material-icons">close</i>
                            </a>
                        </li>
                        {this.renderMatchList()}
                    </ul>
                </div>
            </div>
        );
    }

    private toggleNav() {
        this.props.onToggleNav();
    }

    private onSelectMatch(match: Match) {
        this.props.onSelectMatch(match);
    }

    private renderMatchList() {
        return this.props.matches.map((match, index) => {
            const selected: boolean = match.matchNumber === this.props.selectedMatch.matchNumber;
            const listClasses = classNames(
                'nav__item',
                {'nav__item--selected': selected}
            );
            return (
                <a key={index + '-' + match.date.toDateString()}>
                    <li className={listClasses} onClick={() => this.onSelectMatch(match)}>
                        <div>
                            {match.homeTeam.name} -vs- {match.awayTeam.name}
                        </div>
                    </li>
                </a>
            );
        });
    }
}