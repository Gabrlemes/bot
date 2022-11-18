const discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandsfiles = fs
.readdirSync(path.join(__dirname,"/commands"))
.filterr((filename) => filename.endswith(".js"));

for(var filename of commandsfiles) {
    const command = require(`./commands/${filename}`);

    bot.commands.set(command.name,command);
}

bot.login(process.env.token);

bot.on("ready", function () {
    console.log(`estou conectado com ${bot.user.username}`)
});

bot.on("message", (msg) => {}); 
    if(msg.content.startswith(process.env.prefix)) return;
    return msg.channel.send("hello");

    const args = msg.content.slice(process.env.prefix.length).split(" ");
    const command = args.shift();

    bot.commands.get(command).execute(bot,msg,args);
    
    try {
        bot.commands.get(command).execute(bot, msg, args);
    } catch (e) {
        return msg.reply("ops! esse comando ainda não existe")
    };
    