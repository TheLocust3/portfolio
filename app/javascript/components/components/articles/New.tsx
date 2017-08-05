import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/New'

class New extends React.Component<ConnectedState & ConnectedDispatch, any> {

    render(): JSX.Element {
        return (
            <div>
                New Article
            </div>
        );
    }
}

export default New;
