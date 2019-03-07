var {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

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

var Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentUser: {
      type: User
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
    }
  }
});

let schema = new GraphQLSchema({ query: Query, mutation: Mutation });

module.exports = schema;
