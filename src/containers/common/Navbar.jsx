import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        let solidNavbar = this.props.solidNavbar ? 'navbar-solid' : '';

        return (
            <div className={`navbar ${solidNavbar}`}>
                <Link className="mdc-typography--headline6 navbar-link" to="/">
                    Home
                </Link>

                <Link className="mdc-typography--headline6 navbar-link" to="/projects">
                    Projects
                </Link>

                <Link className="mdc-typography--headline6 navbar-link" to="/blog">
                    Blog
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        solidNavbar: state.global.solidNavbar
    };
}

export default connect(mapStateToProps)(Navbar);
