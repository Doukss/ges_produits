import service from "../services/produit.service.js";
import { ok, created, noContent } from "../utils/response.js";

export const createProduit = async (req, res, next) => {
  try {
    const p = await service.create(req.body);
    return created(res, p, `/produits/${p.id}`);
  } catch (e) {
    next(e);
  }
};

export const getProduits = async (_req, res, next) => {
  try {
    return ok(res, await service.getAll());
  } catch (e) {
    next(e);
  }
};

export const getProduit = async (req, res, next) => {
  try {
    return ok(res, await service.getOne(Number(req.params.id)));
  } catch (e) {
    next(e);
  }
};

export const deleteProduit = async (req, res, next) => {
  try {
    await service.remove(Number(req.params.id));
    return noContent(res);
  } catch (e) {
    next(e);
  }
};