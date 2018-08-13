const Discord = require("discord.js");//Constanta here
exports.run = async (bot, message, args) => {

message.reply(new Date().getTime() - message.createdTimestamp + " ms.")

}