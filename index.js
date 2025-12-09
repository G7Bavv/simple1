const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client();
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1447285317362253898',
    randomLetters: false, 
    time: 3000, 
    type: 'eng' 
});
client.login(process.env.DISCORD_TOKEN);
