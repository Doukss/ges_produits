import fs from "fs/promises";
import path from "path";

export const DB_PATH = path.join(process.cwd(), "db.json");
console.log("DB_PATH:", DB_PATH);

async function readDB() {
  const raw = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

async function writeDB(db) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
}

function nextId(list) {
  return list.reduce((m, x) => (x.id > m ? x.id : m), 0) + 1;
}

export default {
  async findAll() {
    const db = await readDB();
    return db.categories ?? [];
  },

  async findById(id) {
    const db = await readDB();
    return (db.categories ?? []).find(c => c.id === id);
  },

  async create(libelle) {
    const db = await readDB();
    db.categories = db.categories ?? [];

    const cat = { id: nextId(db.categories), libelle };
    db.categories.push(cat);
    await writeDB(db);

    return cat;
  },

  async delete(id) {
    const db = await readDB();
    const before = db.categories.length;
    db.categories = db.categories.filter(c => c.id !== id);

    if (before === db.categories.length) return false;
    await writeDB(db);
    return true;
  }
};
