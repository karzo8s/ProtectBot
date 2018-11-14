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
client.on("message", message => {
            if(message.content.startsWith("$تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **وش بتفيد السيرفر 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
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
