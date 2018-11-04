const prefix ="*";
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
  await  message.channel.send(`**__شروط التقديم__**
══════════════════════════════════════
                                         **__رتب الادارة__**
1- تكتب وش بتفيد السيرفر
2-بتقدر تسوي فعالية
3-تكتب ليش تبي الرتبة
4- وش الرتبة الي تبيها
الرتب الي تقدر تقدم ليها

@•👮🏼Helper👮🏼•  - @•👺Admin👺•  @•👲Support👲• 
══════════════════════════════════════
                                         **__بائع__**
لو تبي تقدم لرتبة بائع اكتب
1- وش تبيع
2-دليل قاطع انك ما تنصب
3-هل راح تبيع بسعر غال؟
@•🚚Saller🚚• 
══════════════════════════════════════
                                         
`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ تقديمك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("508053414165348355").send(`@${message.author.tag} فدم n\ ${text}`)

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
    message.channel.send(`***bc <message>**`);
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
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**ماعندك  برمشن**");
if(!args) return;
message.channel.send(`${args}`);
    message.delete();
}
});


client.on('ready',async () => {
let streaming = [`LegendGang`, `System`];
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
setInterval(() => {
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
}, 5000);
});

client.login(process.env.BOT_TOKEN);
