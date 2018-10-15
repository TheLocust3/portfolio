import React from 'react';
import styled, { css } from 'react-emotion';

import { colors } from '../../constants';

import MaterialIcon from '../common/MaterialIcon';

let ProjectContainer = styled('div')`
    position: relative;

    padding: 40px;
    padding-top: 5vh;
    padding-bottom: 5vh;

    margin-top: -1px;

    border: 1px solid ${colors.borderGray};
    border-left: 0;
    border-right: 0;

    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.025);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:hover i {
        opacity: 1;
    }
`;

let arrowClass = css`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0%, -50%);

    -webkit-transition: opacity 250ms;
    transition: opacity 250ms;

    opacity: 0;
`;

class Project extends React.Component {
    render() {
        return (
            <ProjectContainer>
                {this.props.children}

                <MaterialIcon icon="arrow_forward" className={arrowClass} />
            </ProjectContainer>
        );
    }
}

export default Project;
