import { Router } from "express";
import { createAd, getAdsByGameId } from "../controllers/adsController";
const router = Router();

router.get("/games/:id", (request: any, response: any) => {
   getAdsByGameId(request, response);
});

router.post("/games/:id", (request: any, response: any) => {
   createAd(request, response);
});

export default router;
