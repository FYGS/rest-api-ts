import { Request, Response } from "express";
import { CallbackError } from "mongoose";
import { Contact } from "../models";

export const addNewContact = (req: Request, res: Response) => {
  const newContact = new Contact(req.body);

  newContact.save((err: CallbackError, contact: any) => {
    if (err !== null) {
      res.send(err)
    }
    res.json(contact);
  })
};

export const getContacts = (req: Request, res: Response) => {
  Contact.find({}, (err: CallbackError, contact: any) => {
    if (err !== null) {
      res.send(err)
    }
    res.json(contact);
  })
};

export const getContactById = (req: Request, res: Response) => {
  const { contactId } = req.params;
  Contact.findById(contactId, (err: CallbackError, contact: any) => {
    if (err !== null) {
      res.send(err)
    }
    res.json(contact);
  })
};

export const updateContactById = (req: Request, res: Response) => {
  const { contactId } = req.params;
  Contact.findOneAndUpdate({ _id: contactId }, req.body, { new: true }, (err: CallbackError, contact: any) => {
    if (err !== null) {
      res.send(err)
    }
    res.json(contact);
  })
};

export const deleteContactById = (req: Request, res: Response) => {
  const { contactId } = req.params;
  Contact.deleteOne({ _id: contactId }, (err: CallbackError) => {
    if (err !== null) {
      res.send(err)
    }
    res.json({ message: 'Contact supprimé avec succès!' });
  })
};
