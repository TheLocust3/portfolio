import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import ScrollUp from '../components/common/ScrollUp';
import CandidateXYZ from '../components/projects/CandidateXYZ';
import Intel8080 from '../components/projects/Intel8080';
import GameboyEmulator from '../components/projects/GameboyEmulator';
import PongAimbot from '../components/projects/PongAimbot';

class Projects extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Projects'));
        this.props.dispatch(setSolidNavbar(true));
    }

    componentDidMount() {
        let parsed = queryString.parse(this.props.location.search);

        if (!_.isUndefined(parsed.scroll) && parsed.scroll !== '1') {
            $('html, body').animate(
                {
                    scrollTop: $(`#${parsed.scroll}`).offset().top
                },
                300
            );
        }
    }

    render() {
        return (
            <Content>
                <div id="1">
                    <CandidateXYZ />
                </div>

                <div id="2">
                    <Intel8080 />
                </div>

                <div id="3">
                    <GameboyEmulator />
                </div>

                <div>
                    <PongAimbot />
                </div>

                <ScrollUp />
            </Content>
        );
    }
}

export default connect()(Projects);
