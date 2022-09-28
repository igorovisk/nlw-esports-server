const Prisma = require("@prisma/client");
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
import { Request, Response } from "express";

interface userRequest {
   description: String;
   username: String;
   discordUsername: String;
   yearsOfPlaying: String;
   weekdaysPlayed: String;
   hoursStart: String;
   hoursEnd: String;
   usesVoiceChat: Boolean;
}

async function getAdsByGameId(req: Request, res: Response) {
   const { id } = req.params;
   const games = await prisma.ad.findMany({
      where: {
         gameId: id,
      },
   });

   return res.status(200).json([]);
}

async function createAd(
   request: { body: userRequest; params: { id: String } },
   response: Response
) {
   const id = request.params.id;
   const {
      description,
      username,
      yearsOfPlaying,
      discordUsername,
      weekdaysPlayed,
      hoursStart,
      hoursEnd,
      usesVoiceChat,
   } = request.body;

   await prisma.ad.create({
      data: {
         gameId: id,
         description,
         username,
         yearsOfPlaying,
         discordUsername,
         weekdaysPlayed,
         hoursEnd,
         hoursStart,
         usesVoiceChat,
      },
   });
   return response.status(200).json([]);
}

// app.get("/ads/:id/discord", (request: any, response: any) => {
//    const id = request.params.id;
//    console.log(id);
//    return response.status(200).json([]);
// });

export { getAdsByGameId, createAd };
