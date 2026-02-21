import repo from "../repositories/produit.repo.js";
import { HttpError } from "../utils/httpError.js";

export default {
  async create(data) {
    if (!data.libelle || data.libelle.trim().length < 2) {
      throw new HttpError(422, "VALIDATION_ERROR", "Libellé produit invalide");
    }

    if (typeof data.prix !== "number" || data.prix <= 0) {
      throw new HttpError(422, "VALIDATION_ERROR", "Prix invalide");
    }

    return repo.create({
      libelle: data.libelle.trim(),
      prix: data.prix,
      fournisseurId: data.fournisseurId ?? null
    });
  },

  async getAll() {
    return repo.findAll();
  },

  async getOne(id) {
    const p = await repo.findById(id);
    if (!p) throw new HttpError(404, "NOT_FOUND", "Produit introuvable");
    return p;
  },

  async remove(id) {
    const ok = await repo.delete(id);
    if (!ok) throw new HttpError(404, "NOT_FOUND", "Produit introuvable");
  }
};