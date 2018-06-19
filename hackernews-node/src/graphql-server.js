const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
    id: ID!
    description: String!
    url: String!
}
`

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack GraphQL tutorial'
}]

const resolvers = {
  Query: {
    info: () => `This is the API for the hackernews node`,
    feed: () => links
  },

  Link: {
      id: (root) => root.id,
      description: (root) => root.description,
      url: (root) => root.url,
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
