import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    //Читання з існуючого файлу
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);
    //Повернення зчитаного масиву контактів
    return contacts;
  } catch (error) {
    console.error('Помилка виведення контактів:', error);
    return [];
  }
};

console.log(await getAllContacts());
