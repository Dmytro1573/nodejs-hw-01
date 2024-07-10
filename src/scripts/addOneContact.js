import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const returnedData = JSON.parse(data);
    const newUser = createFakeContact();
    returnedData.push(newUser);
    await fs.writeFile(PATH_DB, JSON.stringify(returnedData, undefined, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
