import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "db.json");

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
    return db.fournisseurs ?? [];
  },

  async findById(id) {
    const db = await readDB();
    return (db.fournisseurs ?? []).find(f => f.id === id);
  },

  async create(data) {
    const db = await readDB();
    db.fournisseurs = db.fournisseurs ?? [];

    const fournisseur = {
      id: nextId(db.fournisseurs),
      ...data
    };

    db.fournisseurs.push(fournisseur);
    await writeDB(db);

    return fournisseur;
  },

  async delete(id) {
    const db = await readDB();
    const before = db.fournisseurs.length;

    db.fournisseurs = db.fournisseurs.filter(f => f.id !== id);

    if (before === db.fournisseurs.length) return false;

    await writeDB(db);
    return true;
  }
};