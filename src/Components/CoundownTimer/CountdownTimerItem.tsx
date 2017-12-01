import * as React from 'react';

import './CountdownTimerItem.css';

export interface CountdownTimerItemProps {
    value: string;
    label: string;
}

export default class CountdownTimerItem extends React.PureComponent<CountdownTimerItemProps> {
    constructor(props : CountdownTimerItemProps) {
        super(props);
    }

    render() {
        return (
            <div className="feature__countdown_timer_item">
                <div className="feature__countdown_timer_value">{this.props.value}</div>
                <div className="feature__countdown_timer_label">{this.props.label}</div>
            </div>
        );
    }
}
