import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const Discord = require("discord.js");
const cliente = new client.Discord();
const config = require("./config.json");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

client.on("ready", () => {
    console.log(`bot foi iniciado, com ${cliente.users.size} usúarios, em ${cliente.channels.size} canais, em ${cliente.guilds.size} servidores.`);
    cliente.setGame(`Eu estou em ${cliente.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    db.set(guild.id, []).write()
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
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().tolowercase();

    if(comando === "ping") {
      const m = await message.channel.send("ping?");
      m.edit(`pong! a latência é ${m.createdTimestamp - message.createdtimestamp}ms. A Latência da API é %{Math.round(client.ping)}ms`);  
    }
    if(comando === "criar") {
        db.get(message.guild.id)
        .push({
            id: message.author.id,
            nick: message.author.id, username,
            avatar: message.author.displayAvatarURL
        }).write()
    }
    if(comando === "editar"){
        if(!args[0])return message.channel.send('esqueceu de algo')
        let [novonome] = args
        db.get(message.guild.id)
        .find({id: message.author.id}) .assign({nick: novonome}).write()
        message.channel.send('perfil atualizado')
        
    }
    if(comando === "apagar"){
        db.get(message.guild.id).remove({id: message.author.id}).write()

    }
    
});

client.login(config.token);