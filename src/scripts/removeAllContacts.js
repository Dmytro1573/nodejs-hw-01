import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const removedData = await fs.writeFile(PATH_DB, JSON.stringify([]));
    return removedData;
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
