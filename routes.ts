/**
 * Main application routes
 */
import { Application } from 'express';

import user from './api/user';
import topic from './api/topic';
import content from './api/content';

function routes(app: Application) {
    app.use('/api/user', user);
    app.use('/api/topic', topic);
    app.use('/api/content', content);

}

export default routes;
