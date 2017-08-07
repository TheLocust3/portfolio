import React from 'react';

import Article from '../../../api/articles'

interface Props {
    isReady: boolean;
    article: Article;
}

class Form extends React.Component<Props, any> {

    render(): JSX.Element {
        return (
            <form>
                Article Form
            </form>
        );
    }
}

export default Form;
