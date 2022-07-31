const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} ITS ONLINE)
    setInterval(() => bot.user.setActivity(`You`, { type: "HELPING"}),5000)
};
