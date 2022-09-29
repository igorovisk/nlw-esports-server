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
         const banner = game.box_art_url.replace("{width}x{height}", "180x240");
         return {
            id: game.id,
            title: game.name,
            bannerURL: banner,
         };
      });

      const gameRes = await prisma.game.createMany({
         data: seedData,
      });

      // const adsRes = await prisma.ad.createMany({
      //    data: [
      //       {
      //          gameId: "03211ab4-50a2-4565-9e5c-f72b15da8ac2",
      //          description: "Procuro alguém pra jogar GTA comigo",
      //          username: "Igor Borgio",
      //          yearsOfPlaying: 10,
      //          discordUsername: "igorovisk",
      //          weekdaysPlayed: "Segunda, Terça, Quarta",
      //          hoursStart: "",
      //          hoursEnd: "",
      //          usesVoiceChat: true, //true
      //       },
      //    ],
      // });
   } catch (err) {
      console.log(err);
   }
};

main();
