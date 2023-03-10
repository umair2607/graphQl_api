const {ApolloServer} = require("apollo-server")
const {typeDefs} = require("./schema/typeDefs")
const {resolvers} = require("./schema/resolvers")

const server = new ApolloServer({typeDefs,resolvers})

server.listen()
.then(({url}) => {
    console.log(`server listening on ${url}`)
})

// https://studio.apollographql.com/sandbox/explorer