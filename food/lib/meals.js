import path from 'path';
import Database from 'better-sqlite3';

const db = new Database(path.resolve(__dirname, './../../../../meals.db'), { fileMustExist: true })

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals').all()
}
