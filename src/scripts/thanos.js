import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    //Читання з існуючого файлу
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);

    //Видалення контактів з ймовірністю 50%
    const newContactsList = contacts.filter(() => Math.random() < 0.5);

    //Запис оновленого порожнього масиву контактів
    await fs.writeFile(PATH_DB, JSON.stringify(newContactsList, null, 2));
    console.log('Видалено 50% контактів');
  } catch (error) {
    console.error('Помилка видалення 50% контактів:', error);
  }
};

await thanos();
