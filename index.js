const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");
const PrivateMessages = require('./Private-messages');



const token = 'Nzg2NjA3NjE3OTIxMTIyMzk2.X9I3bg.rMXfcGXjmlzUMKxZ1BOSyyJxRao';


const PREFIX = '!';
var version = '1.0.3'
var servers = {}

bot.on('ready', () =>{
    console.log('Bot is online!');
})
    bot.on('message', async message => {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
      
        if (message.content === '!join') {
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          }
          else {
            message.reply('You need to join a voice channel first!');
          }
        }
        if(message.content == '!leave') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.leave();
        }
      }
      let args = message.content.substring(PREFIX.length).split(" ");

      const user = message.mentions.users.first();
      if (message.content.startsWith('!kick')) {
       
       
       
       if (user) {
         
         const member = message.guild.member(user);
         
         if (member) {
           
           member
             .kick('Me hab power')
             .then(() => {
               
               message.reply(`Successfully kicked ${user.tag}`);
             })
             .catch(err => {
               
               message.reply('I was unable to kick this member, he is more powerfull i give up');
               
               console.error(err);
             });
         } else {
           
           message.reply("That user isn't in this guild!");
         }
   
       } else {
         message.reply("You didn't mention the user to kick!");
       }
     }
     if (message.content.startsWith('!ban')) {
        
       
         if (user) {
            const member = message.guild.member(user);
             if (member) {
           
            
                member
                .ban({ 
                    reason: 'Me hab power',
                })
                   .then(() => {
                      message.reply(`Successfully banned ${user.tag}`);
             })
                    .catch(err => {
                        message.reply('I was unable to ban the member');
                        console.error(err);
                    });
         } else {
           message.reply("That user isn't in this guild!");
         }
       } else {
             message.reply("You didn't mention the user to ban!");
       }
//message to the user
       if(command === "!ban") {
        if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
      let member = message.mentions.members.first();
if(!member)
  return message.reply("Please mention a valid member of this server");
if(!member.bannable) 
  return message.reply("I cannot ban this user! Do they have a higher role?  Do I have ban permissions?");
  let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";

await member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  message.member.tag.sendMessage('Hi! You were banned from the kult because: {reason}. If you do not get why you were banned, please DM KR15H');
       }
     }
     
    })     
bot.login(token);

