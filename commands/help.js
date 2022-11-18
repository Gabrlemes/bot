const execute = (bot,msg,args) => {
    let string =  "===== ajuda =====\n";
    bot.commands.foreach(command => {
        if(command.help) {
            string += `**${process.env.prefix}${command.name}**: ${command.help}\n`
        }
    });
    return Msg.channel.send(string);
};

module.exports = {
    name: "help",
    execute,
};