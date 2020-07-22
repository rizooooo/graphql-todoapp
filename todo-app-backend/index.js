const { GraphQLServer } = require('graphql-yoga');
const data = require('./data');

const typeDefs = `
  type Todo {
      id: ID!
      name: String!
      done: Boolean! 
  }

  type Query {
    ALL_TODOS: [Todo!]!
  }

  type Mutation {
      CREATE_TODO(name: String!, done: Boolean!): Todo!,
      DELETE_TODO(id: ID!): Todo!
      UPDATE_TODO(id: ID!, name: String!, done: Boolean!): Todo!
  }
`

const resolvers = {
  Query: {
    ALL_TODOS: () => data
  },
  Mutation: {
    DELETE_TODO: (a, { id }) => {
        const index = data.findIndex(a => a.id == id);
        if (index !== -1 ) {
            const deleted = data[index];
            data.splice(index, 1);
            return deleted;
        }  
    },
    CREATE_TODO: (a, { name, done }) => {
        const z = {
            id: Date.now().toString(),
            name,
            done
        }
        data.push(z);
        return z;
    },
    UPDATE_TODO: (a, { id, name, done }) => {
        const index = data.findIndex(a => a.id == id);
        if (index !== -1 ) {
            const record = data[index];
            record.name = name;
            record.done = done;
            return record;
        }  
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('YEZ SIR PORT 4000'));
