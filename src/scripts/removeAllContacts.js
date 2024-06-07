import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    //Видалення контактів з масиву у існуючому файлі
    const contacts = [];

    //Запис оновленого порожнього масиву контактів
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Всі контакти видалено');
  } catch (error) {
    console.error('Помилка видалення контактів:', error);
  }
};

await removeAllContacts();
