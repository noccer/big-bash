import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './NavModels';

interface NavLinkContainerProps {
    wrapperClassNames: string[];
    wrapperStyles?: Object;
    listClassNames?: string[];
    listOnClick?: () => void;
}

export default class NavLinkContainer extends React.PureComponent<NavLinkContainerProps, {}> {
    constructor(props: NavLinkContainerProps) {
        super(props);
    }
    render() {
        return (
            <ul className={this.props.wrapperClassNames.join(',')} style={this.props.wrapperStyles}>
                {
                    NavLinks.map((link, index) =>
                        <li
                            className={!!this.props.listClassNames ? this.props.listClassNames.join(',') : ''}
                            key={index}
                            onClick={this.props.listOnClick}
                        >
                            <Link
                                to={link.url}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                }
            </ul>
        );
    }
}