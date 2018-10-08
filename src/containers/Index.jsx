import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import SplashScreen from '../components/SplashScreen';
import CandidateXYZPanel from '../components/panels/CandidateXYZPanel';

class Index extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Home'));
        this.props.dispatch(setSolidNavbar(false));
    }

    render() {
        return (
            <div>
                <SplashScreen />

                <CandidateXYZPanel />
            </div>
        );
    }
}

export default connect()(Index);
