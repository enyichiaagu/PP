import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';
dotenv.config();
// trying out graphql
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';



// helpers
import { sendServerErrorResponse, sendResponse } from './src/helpers';


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

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return sendResponse(res, 200, {}, "welcome to PP(personal  project) API");
})

app.all('*', (req, res) => res.status(404).json({
  "status_code": 404,
  "message": "Route unavailable on server.",
  "success": false
}));

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
  // console.log(`server started on http://localhost:${PORT}/graphql`);
})