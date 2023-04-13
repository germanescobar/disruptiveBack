/**
 * Main application routes
 */
import { Application } from 'express';

import content from './api/content';
import topic from './api/topic';
import company from './api/user';

function routes(app: Application) {
  app.use('/api/admins', admin);
  app.use('/api/cohorts', cohort);
  app.use('/api/companies', company);
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/jobs', job);
  app.use('/api/makers', maker);

  
}

export default routes;
