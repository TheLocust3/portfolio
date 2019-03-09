import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import lineClamp from 'line-clamp';

import Text from '../../components/common/Text';

class RenderedText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: `text-${uuid()}` };
  }

  componentDidMount() {
    const element = document.querySelector(`#${this.state.id}`);
    lineClamp(element, this.props.lineClamp);
  }

  render() {
    let { children, type, lineClamp, ...props } = this.props;

    return (
      <Text id={this.state.id} type={type} {...props}>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </Text>
    );
  }
}

RenderedText.propTypes = {
  type: PropTypes.string.isRequired,
  lineClamp: PropTypes.number,
  children: PropTypes.string.isRequired
};

export default RenderedText;
