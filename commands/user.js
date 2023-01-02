const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Gets user info'),

    async execution(interaction){
        await interaction.reply(`This command was run by ${interaction.user.name}, who joined on ${interaction.member.joinedAt}`)
    },
};