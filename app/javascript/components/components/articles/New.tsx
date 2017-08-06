import React from 'react';

import { ConnectedState } from '../../containers/articles/New';

class New extends React.Component<ConnectedState, any> {

    render(): JSX.Element {
        return (
            <div>
                New Article
            </div>
        );
    }
}

export default New;
