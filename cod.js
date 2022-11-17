const Discord = require("discord.js");
const cliente = new client.Discord();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`bot foi iniciado, com ${cliente.users.size} usúarios, em ${cliente.channels.size} canais, em ${cliente.guilds.size} servidores.`);
    cliente.setGame(`Eu estou em ${cliente.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`o bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`o bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.userActivity(`serving ${cliend.guild.size} servers`);
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().tolowercase();

    if(comando === "ping") {
      const m = await message.channel.send("ping?");
      m.edit(`pong! a latência é ${m.createdTimestamp - message.createdtimestamp}ms. A Latência da API é %{Math.round(client.ping)}ms`);  
    }

});

client.login(config.token);