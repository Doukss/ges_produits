import repo from "../repositories/fournisseur.repo.js";
import { HttpError } from "../utils/httpError.js";

export default {
  async create(data) {
    if (!data.nom || data.nom.trim().length < 2) {
      throw new HttpError(422, "VALIDATION_ERROR", "Nom fournisseur invalide");
    }

    return repo.create({
      nom: data.nom.trim(),
      telephone: data.telephone ?? null,
      email: data.email ?? null
    });
  },

  async getAll() {
    return repo.findAll();
  },

  async getOne(id) {
    const f = await repo.findById(id);
    if (!f) throw new HttpError(404, "NOT_FOUND", "Fournisseur introuvable");
    return f;
  },

  async remove(id) {
    const ok = await repo.delete(id);
    if (!ok) throw new HttpError(404, "NOT_FOUND", "Fournisseur introuvable");
  }
};