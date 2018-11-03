const prefix ="S";
const admin = ".";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(` Client UserName Changed To : \` ${argresult}\` `)
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
      message.channel.send(` Client Avatar Changed To : \` ${argresult}\` `)
}
});

////New///

client.on('message', async message => {
  if(message.content.startsWith(prefix + "sug")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("501832707764912138").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          }) 

client.on('message', async message => {
  if(message.content.startsWith(prefix + "sub")) {
  await  message.channel.send(`اكتب الرتبة التي ستقدم لها`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ تقديمك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("508053414165348355").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          }) 

client.on('message', message => {
  if(message.content.split(' ')[0] == prefix + 'bc') {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **لا يوجد لديك صلاحية **');
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (!args[1]) {
    message.channel.send(`**Bbc <message>**`);
    return;
    }
            message.guild.members.forEach(m => {
                var bc = new Discord.RichEmbed()
                .setThumbnail(message.guild.iconURL)
                .setFooter(`» مرسلة من قبل: ${message.author.username}#${message.author.discriminator}`)
                .setDescription(args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send({embed: bc}).catch(err => {console.log("[Broadcast] Couldn't send message to this user because he's closing his DM!")});
            });
            message.channel.send("**📢 | يتم إرسال البرودكاست**");
    }
    } else {
        return;
    }
});

client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});
