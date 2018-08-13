const Discord = require("discord.js");
let bot = new Discord.Client();
let prefix = "--";

console.log("Starting bot...");
bot.on("ready", function() {
    console.log(bot.user.username +" is active! Currently serving in " + bot.guilds.size + " servers.\n");
    bot.user.setActivity('with District 12!');
});
bot.on("message", message => {

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;     
    if(!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix);

    } catch (e) {
        return;
    }

});
bot.login("NDYzMzY1NjA4ODY4ODA2NjY2.Dko56Q.AbSGHFMDdOBgdIippjolhsWCD6w");