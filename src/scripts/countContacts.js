import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    //Читання з існуючого файлу
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);
    //Повернення зчитаної кількості контактів
    return contacts.length;
  } catch (error) {
    console.error('Помилка підрахунку кількості контактів:', error);
  }
};

console.log(await countContacts());
