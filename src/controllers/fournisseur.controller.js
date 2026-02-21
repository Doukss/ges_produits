import service from "../services/fournisseur.service.js";
import { ok, created, noContent } from "../utils/response.js";

export const createFournisseur = async (req, res, next) => {
  try {
    const f = await service.create(req.body);
    return created(res, f, `/fournisseurs/${f.id}`);
  } catch (e) {
    next(e);
  }
};

export const getFournisseurs = async (_req, res, next) => {
  try {
    return ok(res, await service.getAll());
  } catch (e) {
    next(e);
  }
};

export const getFournisseur = async (req, res, next) => {
  try {
    return ok(res, await service.getOne(Number(req.params.id)));
  } catch (e) {
    next(e);
  }
};

export const deleteFournisseur = async (req, res, next) => {
  try {
    await service.remove(Number(req.params.id));
    return noContent(res);
  } catch (e) {
    next(e);
  }
};