import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    //Читання з існуючого файлу
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);

    //Створення одного нового контакту
    const newContact = createFakeContact();

    //Додавання одного нового контакту в кінець існуючого масиву контактів
    contacts.push(newContact);

    //Запис оновленого масиву контактів
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Помилка додавання контакту:', error);
  }
};

await addOneContact();
