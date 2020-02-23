import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// trying out graphql
import graphqlHTTP from 'express-graphql';
import { buildSchema } from'graphql';


dotenv.config();
// helpers
import { httpError, httpMsg } from './src/helper/helper';
 
// let schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// let root = { hello: () => 'Hello world' };

const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  httpMsg(res, 200, {}, "welcome to PP(personal  project) API");
})

app.get("*", (req, res) => {
  httpError(res, 404, "404 NOT FOUND");
})
const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}/graphql`);
})