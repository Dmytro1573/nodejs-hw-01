import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const returnedData = JSON.parse(data);
    if (returnedData.length === 0) {
      console.log('The array is already empty');
      return;
    }
    returnedData.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(returnedData, undefined, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
