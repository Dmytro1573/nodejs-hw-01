import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    return JSON.parse(data).length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
