const prefix ="/";
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
///////////////////////////////////////////////////////////////-(التوكن)-///////////////////////////////////////////////////////////////
client.login(process.env.BOT_TOKEN);
///////////////////////////////////////////////////////////////-(صطريم)-///////////////////////////////////////////////////////////////
client.on('ready',async () => {
let streaming = [`LegendGang`, `System`];
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
setInterval(() => {
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
}, 5000);
});
///////////////////////////////////////////////////////////////-(كود الاقتراح)-///////////////////////////////////////////////////////////////
client.on('message', async message => {
  if(message.content.startsWith(prefix + "sug")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("501832707764912138").send(`**# - New Suggest By:**${message.author}
 ${text}`)

              })
            }
          }) 
///////////////////////////////////////////////////////////////-(كود التقديم)-///////////////////////////////////////////////////////////////
client.on('message', async message => {
  if(message.content.startsWith(prefix + "sub")) {
  await  message.channel.send(`**__SubMint__**-**التقديم**
جاوب على الاسئلة التالية..
1- ليش تبغا الرتببة؟؟
2- وش بتفيد السيرفر
3- وش الرتبة التي تريد التقديم لها؟؟
أمامك دقيقة واحدة للأجابة على الاسئلة
${message.author}
                                         
`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ تقديمك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("508053414165348355").send(`**# - New SubMint By:** ${message.author} 
${text}`)

              })
            }
          }) 
///////////////////////////////////////////////////////////////-(كود البرودكاست)-///////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.content.split(' ')[0] == prefix + 'bc') {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **لا يوجد لديك صلاحية **');
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (!args[1]) {
    message.channel.send(`**/bc <message>**`);
    return;
    }
            message.guild.members.forEach(m => {
                var bc = new Discord.RichEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/509658016698728448/511824481828732929/Contact_Us-116-512.png")
                .setFooter(` مرسلة من قبل»» : ${message.author.username}#${message.author.discriminator}`)
                .setDescription(args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send({embed: bc}).catch(err => {console.log("[Broadcast] Couldn't send message to this user because he's closing his DM!")});
            });
            message.channel.send("**📢 | .. .... ..  .. .. ... تم الارسال**");
    }
    } else {
        return;
    }
});
///////////////////////////////////////////////////////////////-(الساي)-///////////////////////////////////////////////////////////////
client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**ماعندك  برمشن**");
if(!args) return;
message.channel.send(`${args}`);
    message.delete();
}
});
///////////////////////////////////////////////////////////////-(بيييص)-///////////////////////////////////////////////////////////////
client.on('message', async message => {
  if(message.content.startsWith(prefix + "res")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **لا يوجد لديك صلاحية **');
  await  message.channel.send(`**# - النتيجة**

نتيجة التقديم👨💻📕

💝العضو»

📗النتيجة»
تم رفضه ❎
ℹ️الرتبة»

سبب»

@here || @✽• Members 
الرفض
══════════════════════════════════════
نتيجة التقديم👨🏼‍💻📕

💝العضو»

📗النتيجة»
تمت الموافقة عليه ✅
ℹ️الرتبة»

سبب»

@here || @✽• Members 
القبول
══════════════════════════════════════`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم ${message.author} `)
                client.channels.get("508544285558439946").send(`${text}`)

              })
            }
          }) 
/////
