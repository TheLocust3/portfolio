let {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
let { GraphQLUpload } = require('graphql-upload');
let { GraphQLDateTime } = require('graphql-iso-date');

let User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});

let Success = new GraphQLObjectType({
  name: 'Success',
  fields: {
    message: { type: GraphQLString }
  }
});

let ArticleInput = new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    image: { type: GraphQLUpload },
    url: { type: GraphQLString }
  }
});

let Article = new GraphQLObjectType({
  name: 'Article',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    image: { type: GraphQLString },
    url: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime }
  }
});

var Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentUser: {
      type: User
    },

    articles: {
      type: new GraphQLList(Article)
    },
    article: {
      type: Article,
      args: {
        url: { type: GraphQLString }
      }
    }
  }
});

var Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signIn: {
      type: User,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      }
    },

    createArticle: {
      type: Article,
      args: {
        input: { type: new GraphQLNonNull(ArticleInput) }
      }
    },
    updateArticle: {
      type: Article,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        input: { type: new GraphQLNonNull(ArticleInput) }
      }
    },
    removeArticle: {
      type: Success,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      }
    }
  }
});

let schema = new GraphQLSchema({ query: Query, mutation: Mutation });

module.exports = schema;
