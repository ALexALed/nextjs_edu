import path from 'path';
import Database from 'better-sqlite3';


let db

if (!db) {
  db = new Database(path.resolve(__dirname, './../../../../meals.db'), { fileMustExist: true })
}

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals').all()
}


export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}