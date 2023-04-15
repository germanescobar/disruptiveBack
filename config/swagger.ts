import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Request, Response, Application } from 'express';

import log from '../logger';

const ext = process.env.NODE_ENV === 'production' ? '.js' : '.Ts';

const routesApi = path.join(__dirname, `../api/**/index${ext}`);
const schemasApi = path.join(__dirname, `../api/**/**.controller${ext}`);

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Disruptive Backend',
      version:'1.0.0',
      description: 'API Documentation Disruptive Backend Proyect',
      contact: {
        name: 'Mi LinkedIn',
        url: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
        email: 'jesdaos@hotmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
      {
        url: process.env.BASE_URL || 'http://localhost:8080',
        description: 'Production server',
      },
    ],
  },
  apis: [routesApi, schemasApi],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application, port: number) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON Format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  log.info(`📃🛠 Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;