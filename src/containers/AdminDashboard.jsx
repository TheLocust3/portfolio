import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthApi from '../api/auth-api';
import { setSolidNavbar } from '../actions/global-actions';
import { fetchAllArticles } from '../actions/article-actions';

import Text from '../components/common/Text';
import FadeIn from '../components/common/FadeIn';
import Content from '../components/common/Content';
import ArticleList from '../components/articles/ArticleList';

class AdminDashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
    this.props.dispatch(fetchAllArticles());
  }

  onSignOutClick() {
    AuthApi.signOut();
  }

  render() {
    if (!this.props.isReady) return null;

    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Admin</title>
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline3" header>
              Admin Dashboard
            </Text>

            <Text type="body2">
              <a href="/" onClick={this.onSignOutClick.bind(this)}>
                Sign Out
              </a>
            </Text>
            <br />

            <Text type="body1">Email: {this.props.user.email}</Text>
            <br />

            <div>
              <Text type="headline5">Articles</Text>

              <Text type="body2">
                <Link to="/admin/articles/new">New Article</Link>
              </Text>

              <ArticleList articles={this.props.articles} />
            </div>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.currentUser,
    isReady: state.articles.isReady,
    articles: state.articles.articles
  };
}

export default connect(mapStateToProps)(AdminDashboard);
