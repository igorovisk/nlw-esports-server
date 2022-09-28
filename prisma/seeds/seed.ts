const Prisma = require("@prisma/client");
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
const axios = require("axios");

// interface Game {
//    id: String;
//    name: String;
//    box_art_url: String;
// }
const main = async () => {
   try {
      const config = {
         headers: {
            Authorization: "Bearer " + process.env.TWITCH_AUTHORIZATION_TOKEN,
            "Client-ID": process.env.TWITCH_CLIENT_ID,
         },
      };
      const requestPopularGames = await axios.get(
         "https://api.twitch.tv/helix/games/top",
         config
      );
      const popularGames = requestPopularGames.data.data;

      const seedData = popularGames.map((game) => {
         return {
            id: game.id,
            title: game.name,
            bannerURL: game.box_art_url,
         };
      });
      // console.log(seedData, "seed");
      const gameRes = await prisma.game.createMany({
         data: seedData,
      });

      const adsRes = await prisma.ad.createMany({
         data: [
            {
               gameId: "0",
               description: "Procuro alguém pra jogar Minecraft comigo",
               username: "Igor Borgio",
               yearsOfPlaying: 10,
               discordUsername: "igorovisk",
               weekdaysPlayed: "Segunda, Terça, Quarta",
               hoursStart: "",
               hoursEnd: "",
               usesVoiceChat: true, //true
            },
         ],
      });

      console.log(adsRes, "ads res");
   } catch (err) {
      console.log(err);
   }
};

main();
