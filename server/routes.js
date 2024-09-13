//v7 imports
import user from "./api/v1/controllers/user/routes";
import userNew from "./api/v1/controllers/userNew/routes";
import admin from './api/v1/controllers/admin/routes';
import statics from './api/v1/controllers/static/routes';
import faq from './api/v1/controllers/static/routes';
import staticLink from './api/v1/controllers/static/routes';
import notification from './api/v1/controllers/notification/routes'; 
import supportTicket from './api/v1/controllers/supportTicket/routes'; 


/**
 *
 *
 * @export
 * @param {any} app
 */

export default function routes(app) {

  app.use("/api/v1/user", user)
  app.use("/api/v1/userNew", userNew)
  app.use('/api/v1/admin', admin)
  app.use('/api/v1/static', statics)
  app.use('/api/v1/faq', faq)
  app.use('/api/v1/staticLink', staticLink)
  app.use('/api/v1/notification',notification) 
  app.use('/api/v1/supportTicket',supportTicket) 


  



  return app;
}
