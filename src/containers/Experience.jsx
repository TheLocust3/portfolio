import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import ScrollUp from '../components/common/ScrollUp';
import Talla from '../components/experience/Talla';
import Nutonian from '../components/experience/Nutonian';
import CloudHealth from '../components/experience/CloudHealth';

class Experience extends React.Component {
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
                    <Talla />
                </div>

                <div id="2">
                    <Nutonian />
                </div>

                <div id="3">
                    <CloudHealth />
                </div>

                <ScrollUp />
            </Content>
        );
    }
}

export default connect()(Experience);
