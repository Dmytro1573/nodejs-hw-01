import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const transformedData = JSON.parse(data);
    for (let i = 0; i <= number; i++) {
      const db = createFakeContact();
      transformedData.push(db);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(transformedData, null, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.log(error);
  }
};

console.log(generateContacts(5));
