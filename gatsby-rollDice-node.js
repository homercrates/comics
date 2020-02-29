const express = require("express")
const graphqlHTTP = require("express-graphql")
const { buildSchema } = require("graphql")

// constrct schema using graphql syntax
const schemaHey = buildSchema(`
    type Query{
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`)

// the root provides a resolver function for EACH API endpoint
const root = {
  rollDice: ({ numDice, numSides }) => {
    let output = []
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)))
    }
    return output
  },
}

const app = express()
app.use(
  "/graphl",
  graphqlHTTP({
    schema: schemaHey,
    rootValue: root,
    graphql: true,
  })
)

app.listen(4000)
console.log("Running a GrapgQl API server on localhost:4000/graphql")
