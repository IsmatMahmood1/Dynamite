const bot = require("./DynamitBot.js");

const gamestate = {
    rounds: [
        {
            p1: "R",
            p2: "S"
        }
    ]
}

console.log(bot.makeMove(gamestate));