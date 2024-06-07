import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    //Читання з існуючого файлу
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);

    //Створення масиву нових контактів
    const newContacts = Array.from({ length: number }, createFakeContact);

    //Додавання нових контактів в існуючий масив
    const updateContacts = [...contacts, ...newContacts];

    //Запис масиву нових контактів в файл
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};

await generateContacts(5);
