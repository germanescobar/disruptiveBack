import express from 'express';
import { createServer } from 'http';

import expressConfig from './config/express';
import swaggerDocs from './config/swagger';
import routes from './routes';

// setup server
const app = express();
export const server = createServer(app);

const env = process.env.NODE_ENV;
const port = process.env.PORT || 8080;

// if (env !== 'test') {
//   connectDB();
// }

// setup express
expressConfig(app);
// routes
routes(app);
// Swagger
swaggerDocs(app, port as number);

export default app;