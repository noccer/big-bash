import * as React from 'react';
import * as classNames from 'classnames';

interface NavToggleProps {
    onClick: () => void;
    classNames: string[];
}

export default class NavToggle extends React.PureComponent<NavToggleProps, {}> {
    constructor(props: NavToggleProps) {
        super(props);
    }

    render () {
        const classes = classNames(this.props.classNames);
        return (
            <a className={classes} onClick={this.props.onClick}>
                <i className="material-icons">menu</i>
            </a>
        );
    }
}