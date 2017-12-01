import * as React from 'react';
import './NavOverlay.css';

interface NavOverlayProps {
    navOpen: boolean;
    onClick: () => void;
}

export default class NavOverlay extends React.PureComponent<NavOverlayProps, {}> {
    private static readonly navClosedStyle = {
        opacity: 0,
        pointerEvents: 'none'
    };

    private static readonly navOpenStyle = {
        opacity: 0.7
    };

    constructor(props: NavOverlayProps) {
        super(props);

    }

    render() {
        return (
            <div
                className="nav__overlay"
                style={this.props.navOpen ? NavOverlay.navOpenStyle : NavOverlay.navClosedStyle}
                onClick={this.props.onClick}
            />
        );
    }
}