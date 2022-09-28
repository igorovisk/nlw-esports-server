import { Router } from "express";

import { getGames } from "../controllers/gamesController";
const router = Router();

router.get("/", (request: any, response: any) => {
   getGames(request, response);
});

export default router;
