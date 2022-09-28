const Prisma = require("@prisma/client");
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

export async function getGames(req: Object, res: any) {
   const games = await prisma.game.findMany();
   return res.status(200).json(games);
}
