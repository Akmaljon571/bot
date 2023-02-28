import { Telegraf } from "telegraf";
import dotenv from "dotenv"
import { q, w, e, r, t } from "./utils/txt.js";
import { replyOptions } from "./utils/reply.js";
import { userAdd } from "./utils/fetchArg.js";
import { botHolati, Video } from "./utils/fetchVideo.js";
dotenv.config()

const bot = new Telegraf(process.env.token);

bot.start(async (msg) => {
    msg.reply(q, replyOptions);
    await userAdd(msg.from)
});

bot.help((msg) => msg.reply(w));

bot.hears('Instagram Video❤️‍🔥', (msg) => msg.reply(e));

bot.hears('Tik Tok Video🎵', (msg) => msg.reply(r));
bot.hears("Admin bilan bog'lanish👨‍💻", (msg) => msg.reply(t));
bot.hears('bot holati akmalbek', async(msg) => botHolati(msg));
bot.hears('/admin', async(msg) =>  msg.reply(t));

bot.on('message', (msg) => {
    const http = msg.message.text.split('').slice(0, 8).join('')
    if (http == "https://") {
        Video(msg)
    } else {
        msg.reply("Aka Link Jonatsezchi Jasur hit dvoradi bomasam")
    }
})

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
