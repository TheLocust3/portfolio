import React from 'react';

import Article from '../../../api/articles'

interface Props {
    article: Article;
}

interface State {
    article: Article;
}

class Form extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = { article: new Article() };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event) {
        let article: Article = this.state.article;
        article.title = event.target.value;

        this.setState({
            article: article
        });
    }

    onTextChange(event) {
        let article: Article = this.state.article;
        article.text = event.target.value;

        this.setState({
            article: article
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.state.article.save().then((response) => {
            window.location.href = `/articles/${response.id}`;
        });
    }

    render(): JSX.Element {
        return (
            <form onSubmit={this.onSubmit}>
                Title<br />
                <input defaultValue={this.props.article.title} type="text" onChange={this.onTitleChange} /><br /><br />

                Body<br />
                <textarea defaultValue={this.props.article.text} onChange={this.onTextChange} /><br /><br />

                <button>Submit</button>
            </form>
        );
    }
}

export default Form;
