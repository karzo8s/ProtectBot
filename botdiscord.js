const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();

const prefix = ['&']// البرفكس
client.once('ready', () => {
	console.log('Ready!');
});
//////////////////////////////////////-(التوكن)/////////////////////////////////
client.login(process.env.BOT_TOKEN);
//////////////////////////////////////-(الستريم)///////////////////////////////
client.on('ready',async () => {
let streaming = [`Stream1`, `Stream2`];
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
setInterval(() => {
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
}, 5000);
});
//////////////////////////////////////-(لينك بالخاص)-//////////////////////////////////////
 client.on('message', message => {
    if (message.content.startsWith(prefix + "link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**# - Link This Server**")

message.author.send(`**# - This Link By Me**`)


    }
});
//////////////////////////////////////-(لينك البوت)-//////////////////////////////////////
client.on('message', msg => {
    if (message.content.startsWith(prefix + "linkbot")) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**# - Mention The Bot U Want His Link**' + '``')
if(!user.bot) return msg.reply('\`# - <_<\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});
//////////////////////////////////////-(المتبندين)-//////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});
//////////////////////////////////////-(قطط كيوت)-//////////////////////////////////////
 const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
    if (message.content.startsWith(prefix + "cat")) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
 //////////////////////////////////////-(الغبي الي يرسل توكن)-//////////////////////////////////////
 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`** # - You Must Not Sharing Your Token`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`# - Wtf ??`);
        return;
    }
}
}); 
//////////////////////////////////////-(قيف اواي)-//////////////////////////////////////
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **# - MAKE SURE \`giveaway\`**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('giveaway', collected.first().content);
//Here
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **# - Write The Time Of This Bot....**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **# - This Giveway On?**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`Time : ${duration / 1000} Sec`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**# - None **';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Give Away End !',`# - The Winner IS : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **# - Done**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **# - Icant do this**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
//////////////////////////////////////-(مسح)-//////////////////////////////////////
client.on("message", message => { 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clean")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **•# No Permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "**•# Chat Cleaned**",
        color: 0x06DF00,
        description: "**•# Done Cleaned The Chat**",
        footer: {
          text: "•# Setro - System" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
//////////////////////////////////////-(معلومات السيرفر)-//////////////////////////////////////
 client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**•# ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**•# Members 👤 **' , `${message.guild.memberCount}`)
.addField('**•# Owner 👑**' , `${message.guild.owner.user.username}`)
.addField(`**•# Rooms :scroll: **`,true)
.addField(`# Text`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: Voice`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**•# Roles **:briefcase:`,`${message.guild.roles.size}`)
        message.channel.send({embed:embed})
    }
});
//////////////////////////////////////-(انفايتص)-//////////////////////////////////////
client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` •# You Invite :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
//////////////////////////////////////-(هيلب)-//////////////////////////////////////
 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {


 message.author.sendMessage(`**# Bot Commands**
\`Info\`
Bot Of Server

\`${prefix}linkdm\`
لأرسال رابط السيرفر بالخاص •

\`${prefix}linkbot\`
•لينك اي بوت تريديه

\`${prefix}cat\`
•قطط كيوت

\`${prefix}sug\`
•للاقتراح

\`${prefix}sub\`
•للتقديم

\`${prefix}invites\`
•لمعرفة عدد الدعوات

\`${prefix}members\`
•لمعرفة الاعبين

\`${prefix}counting\`
•للعد

\`${prefix}new\`
•لفتح تذكرة

** Admin **

\`${prefix}bc | ${prefix}bce\`
برد كاست•

\`${prefix}closec , ${prefix}openc\`
•فتح وقفل الشات

\`${prefix}kick , ${prefix}ban \`
بان وكيك

\`${prefix}say\`
لأرسال ما تقوله :/

**•نتمنى قضاء وقت شيق•**`);

message.channel.send('**:white_check_mark:__ I Send It In Ur DM ,, Check Ur DM__**');

    }
});
//////////////////////////////////////-(معلومات الرتبة)-//////////////////////////////////////
 client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "gRole")) {
    if(!args) return message.reply('•# Wrrite Name Of The Role');
    if(!role) return message.reply('•# No Role In This Name');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('•# Role Name',role.name,true)
    .addField('•# Role ID',role.id,true)
    .addField('•# Create At',role.createdAt.toLocaleString(),true)
    .addField('•# Role Color',role.hexColor,true)
    .addField('•# Members Have This Role',role.members.size,true)
    .addField('•# Role Position',role.position,true)
    .addField('•# Role Permissions',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});
//////////////////////////////////////-(معلومات)-//////////////////////////////////////
 client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {


                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField('•# You Join Discord In',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField('•# Join Our Server In', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(`•# You Invites `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });
//////////////////////////////////////-(نقل الى رومك)-//////////////////////////////////////
client.on('message', message => {
    if(message.content.startsWith(prefix + 'move')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**•# Oh No ,, You Dont Have Permissins**');
    if (message.member.voiceChannel == null) return message.channel.send(`**•# Join VOICE-ROOM**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**•# Done Move All Members To Ur Room**`)


     }
       });
//////////////////////////////////////-(معلومات عن الاعضاء)-//////////////////////////////////////
client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
•# 💚Online :  ${message.guild.members.filter(m=>m.presence.status == 'online').size}
•# ❤️dnd    :  ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
•# 💛idle   :  ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
•# 🔷Members:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
•# 🔶Bots   :  ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
//////////////////////////////////////-(ايموجك ._.)-//////////////////////////////////////
client.on('message', message => { 
let PREFIX = '-'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
//////////////////////////////////////-(عد يباشا)-//////////////////////////////////////
client.on('message',function(message) {
    let messageArray = message.content.split(" ");
    let args = messageArray[1];
   if(message.content.startsWith(prefix + "counting")) {
       if(!args) return message.reply('ℹ ``•# Pick A Number``');
       let i;
       for (i = 0; i < `${parseInt(args) + 1}`; ++i)
       message.channel.send(i)
   }
});
//////////////////////////////////////-(انفايطص)-//////////////////////////////////////
client.on('message', message => {
   if(message.content.startsWith(prefix + "Invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
//////////////////////////////////////-(برضه)-//////////////////////////////////////
 client.on('message', message => {
let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'args')) { 
if(!args) return message.reply("please select a slice");
message.channel.send(`let args = message.content.split(" ").slice(${args}).join(" ")`);
}
});
//////////////////////////////////////-(رتب ,_,)-//////////////////////////////////////
client.on('message', ra3d => {
var prefix = "!";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`•# How Long Coloers?`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` •# No Man -_-**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
 
 
 
 
 
 function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
//////////////////////////////////////-(س)-//////////////////////////////////////
 client.on('message', message => {
    if (message.content === 'cat') {
        message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "cat.png")
    }
});
//////////////////////////////////////-(سبة عيييب)-//////////////////////////////////////
 const bannedwords = [
    "كل زق",
    "احا",
    "كس امك",
    "عرص",
    "شرموط",
    "متناك"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("•# No No No NO | You Will Get Mute  ").then(msg => {msg.delete(5000)});;
  };
});
 
 
 
 client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('!عكس') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});
//////////////////////////////////////-(اعطاء الرتبة)-//////////////////////////////////////
client.on('guildMemberAdd', member => {
if(member.guild.id === "اي دي السيرفر") {
let role = member.guild.roles.find(r => r.name === "اسم الرتبة");
member.addRole(role).catch(e => console.log(`Error Detected: ${e.message}`));
}
});
//////////////////////////////////////-(قفل وفتح الشات)-//////////////////////////////////////
client.on('message', message => {
       if(message.content === prefix + "closec") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__•# No Permissions__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
                  message.reply("**•# Chat Closed :)✅ **")
              });
                }
 
    if(message.content === prefix + "openc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
               
              }).then(() => {
                  message.reply("**•# Chat Opened :)✅**")
              });
    }
       
});
//////////////////////////////////////-(الترحيب)-//////////////////////////////////////
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');/// Room Welcome
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Welcome To Setro', "**Enjoy...**" )
        .addField('•🆔| User » ', "**[" + `${member.id}` + "]**" )
        .addField('•➡|Memeber» ',`${member.guild.memberCount}`)                     
        .addField('•🕣|Time Create » ', member.user.createdAt.toLocaleString(), true)                   
     .setFooter("Setro - Server")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
//////////////////////////////////////-(التذاكر)-//////////////////////////////////////
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('Please type a subject for the ticket.');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**:AE: ');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS", "category");
            };
                message.guild.createChannel(`ticket`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`Your ticket has been created. [ ${ticket} ] :AE: `);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**Ticket**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('# - Subject', args)
                                .addField('# - Author', message.author)
                                .addField('# - Channel', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("Do you really want to close this ticket? Repeat the command to make sure. You have 20 seconds.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**•# Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});
//////////////////////////////////////-(Status)-//////////////////////////////////////
//////////////////////////////////////-(مسح الشات)-//////////////////////////////////////
client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__•# No Permissions__**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**•# Must Be Under >>100**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**•# Pick How Long You Want To Delete**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __•# Done __ `).then(messages => messages.delete(5000));
  }
  });
//////////////////////////////////////-(كيق)-//////////////////////////////////////
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
           if (message.content.startsWith(prefix + "kick")) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
//////////////////////////////////////-(بان)-//////////////////////////////////////
 client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
           if (message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});
//////////////////////////////////////-(الميوت)-//////////////////////////////////////
//////////////////////////////////////-(بيص)-//////////////////////////////////////
//////////////////////////////////////-(بيص)-//////////////////////////////////////
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم السلام');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك');
  }
});
///////////////////////////////////////////////////////////////-(كود الاقتراح)-///////////////////////////////////////////////////////////////
client.on('message', async message => {
  if(message.content.startsWith(prefix + "sug")) {
  await  message.channel.send(`•# Write Ur Suggest`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`•# Done We Will Do It Soon ${message.author}`)
                client.channels.get("501832707764912138").send(`**# - New Suggest By:**${message.author}
 ${text}`)

              })
            }
          }) 
///////////////////////////////////////////////////////////////-(كود التقديم)-///////////////////////////////////////////////////////////////
client.on("message", message => {
           if (message.content.startsWith(prefix + "sub")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "submints")
            if(!channel) return message.reply("**# - No Room Come Later**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **# - أسمك أو لقبك🕺🏼**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **# - وش بتفيد السيرفر؟🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **# - ليش تبي الرتبة😾**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **# - بتحترم القوانين📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **# - ماهي وجهة نظرك على السيرفر🧐**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RED')
                        .setTitle(`**# - New SubMint | تقديم جديد**`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`وش بيفيد السيرفر؟`**', `${age}` , true)
                        .addField('**`ليش يبي الرتبة؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`وجهة نظره`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        }); 
///////////////////////////////////////////////////////////////-(كود البرودكاست)-///////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.content.split(' ')[0] == prefix + 'bce') {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ |**•# Not Have Permissions **');
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (!args[1]) {
    message.channel.send(`**&bc <message>**`);
    return;
    }
            message.guild.members.forEach(m => {
                var bc = new Discord.RichEmbed()
                .setThumbnail("https://dumielauxepices.net/sites/default/files/heart-icons-message-636055-9011668.png")
                .setFooter(`📢|BroadCast|📢`)
                .setDescription(args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send({embed: bc}).catch(err => {console.log("[Broadcast] Couldn't send message to this user because he's closing his DM!")});
            });
            message.channel.send("**•# Done I Send It**");
    }
    } else {
        return;
    }
});
///////////////////////////////////////////////////////////////-(الساي)-///////////////////////////////////////////////////////////////
client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**•# You Not Hav Permissions**");
if(!args) return;
message.channel.send(`${args}`);
    message.delete();
}
});
///////////////////////////////////////////////////////////////-(log)-///////////////////////////////////////////////////////////////
client.on("guildCreate", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('468522929932599316')
    if(!channel) return;
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Joined Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});


client.on("guildDelete", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('468522929932599316')
  if(!channel) return;
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Left Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});
 

client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor.username

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
        .setTimestamp()
       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
  })
})


  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setTitle(' تــعــديــل رســالــه  :  ')
.addField('قــبــل الــتــعــديــل',`${message.cleanContent}`)
.addField(' بــعــد  الــتــعــديــل ',`${newMessage.cleanContent}`)
.addField(' عــدلــت فــي  ',`<#${message.channel.id}>`)
.addField(' يــواســطــه  ', `<@${message.author.id}> `)
.setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setTitle('  مــســح رســالــه  :   ')
 .addField('  الــرســالــه  ',`${message.cleanContent}`)
 .addField('  مــســحــت فــي  ',`<#${message.channel.id}>`)
 .addField(' يــواســطــه  ', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
});

     
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#36393e')          
            .setTitle('-  مــســح رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('+  انــشــاء رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("حــظــر عــضــو :  ")
        .setColor('#36393e') 
        .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("  فــك حــظــر عــن عــضــو ")
        .setColor('#36393e') 
		 .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
///////////////////////////////////////////////////////////////-(بيييص)-///////////////////////////////////////////////////////////////
client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});
/////////////////////////////////
client.on('guildMemberAdd', msg => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setThumbnail(msg.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/514480091452014611/515101544711192598/welcome.png')     
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  msg.user.id, true)
    .addField('``تاق العضو``', msg.user.discriminator, true)
    .addField('``تم الانشاء في``', msg.user.createdAt, true)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${msg.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(msg.guild.name, msg.guild.iconURL, true)
    var channel = msg.guild.channels.find('name', 'testwelcom')        //تقدر تغير اسم الشانل حق الترحيب
    if (!channel) return;
    channel.send({embed : embed});
    });
////////////////////////////////
const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     'صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     'صراحه | هل تحب عائلتك ام تكرههم؟',
     'صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     'صراحه  |  هل خجلت من نفسك من قبل؟',
     'صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     'صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     'صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  'صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     'صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     'صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     'صراحه  |  ما هو عمرك الحقيقي؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟',
]
   client.on('message', message => {
           if (message.content.startsWith(prefix + "saraha")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("•# Saraha ")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});



 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     'كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     'كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     'كت تويت | وش يفسد الصداقة؟',
     'كت تويت | شخص لاترفض له طلبا ؟',
     'كت تويت | كم مره خسرت شخص تحبه؟.',
     'كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     'كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     'كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     'كت تويت |أقوى كذبة مشت عليك ؟',
     'كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     'كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     'كت تويتاكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     'كت تويت | وش محتاج عشان تكون مبسوط ؟',
     'كت تويت | مطلبك الوحيد الحين ؟',
     'كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
           if (message.content.startsWith(prefix + "cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('•# Cut Tweet' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
////
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "**•# Date And Time**")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('**•# Emarate [UAE]**',
                "•#» "+ hours + ":" + minutes +":"+ seconds + " «#•")
                 .addField('**•# Saudi Arebia [KSA]**',
                "•#» "+ hours2 + ":" + minutes +":"+ seconds  + " «#•") 
                .addField('**•# Egypt [EGY]**',
                "•#» "+ hours3 + ":" + minutes +":"+ seconds  + " «#•") 
                
                .addField('**•# Date **',
                "•#» "+ Day + "-" + Month + "-" + Year +  " «#•")

                 message.channel.sendEmbed(Date15);
        }
    });
/////
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/515879836309520403/515882876605169665/wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'https://cdn.discordapp.com/attachments/515879836309520403/515882914869805056/Welcome.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});
