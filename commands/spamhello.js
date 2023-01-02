const { SlashCommandBuilder } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
    .setName("Hello")
    .setDescription("Spam Hello World"),

async execute(interaction){
    await interaction.reply
},
};