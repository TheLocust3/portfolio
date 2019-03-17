import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH, colors } from '../../constants';
import { getArchives } from '../../api/articles';

import Text from '../../components/common/Text';
import SideMargin from '../../components/common/SideMargin';

let Sidebar = styled('div')`
  position: absolute;
  top: 0;
  right: 0;

  width: 30%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

let Divider = styled('div')`
  width: 100%;
  height: 1px;

  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 5%;

  background-color: ${colors.borderGray};
`;

class ArchivesSidebar extends React.Component {
  renderArchives() {
    let archives = getArchives(this.props.articles);

    return (
      <Text type="body2">
        {archives.map((archive) => {
          return (
            <div key={archive}>
              <Link to={`/archives/${_.lowerCase(archive)}`}>{archive}</Link>
            </div>
          );
        })}
      </Text>
    );
  }

  render() {
    return (
      <Sidebar>
        <Text type="headline6">Archives</Text>
        <Divider />

        <SideMargin margin="2.5%">{this.renderArchives()}</SideMargin>
      </Sidebar>
    );
  }
}

ArchivesSidebar.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArchivesSidebar;
