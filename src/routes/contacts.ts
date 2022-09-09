import { Express, Request, Response } from 'express';

import { addNewContact, deleteContactById, getContactById, getContacts, updateContactById } from '../controllers';

export const contactsRoutes = (app: Express) => {
  app.route('/contacts')
    .get(getContacts)
    .post(addNewContact);

  app.route('/contacts/:contactId')
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);
};
