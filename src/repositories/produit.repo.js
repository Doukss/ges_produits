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
    return db.produits ?? [];
  },

  async findById(id) {
    const db = await readDB();
    return (db.produits ?? []).find(p => p.id === id);
  },

  async create(data) {
    const db = await readDB();
    db.produits = db.produits ?? [];

    const produit = {
      id: nextId(db.produits),
      ...data
    };

    db.produits.push(produit);
    await writeDB(db);

    return produit;
  },

  async delete(id) {
    const db = await readDB();
    const before = db.produits.length;

    db.produits = db.produits.filter(p => p.id !== id);

    if (before === db.produits.length) return false;

    await writeDB(db);
    return true;
  }
};