import React from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

import Text from '../../components/common/Text';
import UnstyledLink from '../../components/common/UnstyledLink';

let titleClass = css`
    font-family: 'Source Code Pro', monospace;

    color: white;
`;

let navbarClass = css`
    background-color: #424242;
`;

class MobileNavbar extends React.Component {
    onMenuClick(event) {
        event.preventDefault();

        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = true;
    }

    onLinkClick() {
        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = false;
    }

    render() {
        return (
            <div>
                <header className={`mdc-toolbar mdc-toolbar--fixed navbar ${navbarClass}`}>
                    <div className="mdc-toolbar__row">
                        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                            <UnstyledLink to="/">
                                <Text className={titleClass} type="headline6">
                                    Jake Kinsella
                                </Text>
                            </UnstyledLink>
                        </section>

                        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                            <a href="#" className="material-icons mdc-toolbar__menu-icon navbar-menu-icon" onClick={this.onMenuClick.bind(this)}>
                                menu
                            </a>
                        </section>
                    </div>
                </header>

                <aside className="mdc-drawer mdc-drawer--temporary" id="mobile-navbar">
                    <nav className="mdc-drawer__drawer">
                        <header className="mdc-drawer__header">
                            <div className={`mdc-drawer__header-content ${navbarClass}`}>
                                <Text className={titleClass} type="headline6">
                                    Jake Kinsella
                                </Text>
                            </div>
                        </header>

                        <nav className="mdc-drawer__content mdc-list-group">
                            <div className="mdc-list">
                                <Link className="mdc-list-item" to="/" onClick={this.onLinkClick.bind(this)}>
                                    <Text type="body1">Home</Text>
                                </Link>

                                <Link className="mdc-list-item" to="/projects" onClick={this.onLinkClick.bind(this)}>
                                    <Text type="body1">Projects</Text>
                                </Link>

                                <Link className="mdc-list-item" to="/experience" onClick={this.onLinkClick.bind(this)}>
                                    <Text type="body1">Experience</Text>
                                </Link>
                            </div>
                        </nav>
                    </nav>
                </aside>
            </div>
        );
    }
}

export default connect()(MobileNavbar);
