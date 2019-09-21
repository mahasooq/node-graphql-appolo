const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log('mongo connected')
  const server = new ApolloServer({
    typeDefs : schema,
    resolvers
  });
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}).catch(err=>{
  console.log("Error", err);
})

