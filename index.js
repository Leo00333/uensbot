//base bot
const Discord = require("discord.js")


const client = new Discord.Client(
  { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES" ,"GUILD_VOICE_STATES"  ] }
)




client.login("OTUzNzU3MDI1NDQ2Mjc3MTIw.YjJNcg.l55kQUxLrGBcc6Pz3nXO6TDd26E")

client.on("ready",()=> {

console.log("BOT ONLINE")

})
//comando ip
client.on("messageCreate", (message) => {
    if(message.content == "!ip"){
  var embed = new Discord.MessageEmbed()
  .setColor ("#ff0000")
  .setTitle ("ANARCHY RP")
  .setDescription ("**IP FIVEM: `anarchy.vpsgh.it` \n IP TEAMSPEAK: `anrchyrp`**")
  .setThumbnail("https://cdn.discordapp.com/attachments/932277390057541722/957403344744366080/logoanarchy.gif")
  .setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
  message.channel.send({embeds: [embed]})
}
})

//comando invito 
client.on("messageCreate" , (message) => {
    if(message.content == "!invito") {
        message.channel.send(" **INVITO DISCORD :** https://discord.gg/4TfR7pRbyJ  ")
    }
})
//comando invito rp 
client.on("messageCreate" , (message) => {
  if(message.content == "!invitorp") {
      message.channel.send(" **INVITO DISCORD PERSONALIZZATO :** https://discord.gg/anarchyrp ")
      .setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
  }
})
//gerarchia staff
client.on("messageCreate", (message) => {
  if(message.content == "!gerarchia"){
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non hai il permesso');
      return;
    }
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non ho il permesso');
      return;
    }
    var embed = new Discord.MessageEmbed()
    .setColor ("#ff0000")
    .setThumbnail("https://cdn.discordapp.com/attachments/932277390057541722/957403344744366080/logoanarchy.gif")
    .setDescription ("Gerarchia Staff (27/3/2022) \n➖\n Owner = <@814764719582740500> , <@826050711967760396> \n➖\n Founder = <@340221926729318404>  \n➖\n Co-Founder = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Discord Manager = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Developer = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Responsabile Staff = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Head Admin = <@340221926729318404> \n➖\n Admin = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Moderatore = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> , <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Helper = <@340221926729318404> , <@340221926729318404> , <@340221926729318404> , <@340221926729318404> \n➖\n Staff in prova = <@340221926729318404> , <@340221926729318404> ")
    .setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
    message.channel.send({embeds: [embed]})
}})
 

//✅SERVER ON

client.on("messageCreate", (message) => {
  if(message.content == "!on"){
    message.channel.bulkDelete(1, true)

    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non hai il permesso');
      return;
    }
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non ho il permesso');
      return;
    }
    
    var embed = new Discord.MessageEmbed()
    .setColor ("#0bfa2d")
    .setAuthor ("⚡UENS ESPORT⚡")
    .setTitle ("\:white_check_mark:  SERVER ONLINE \:white_check_mark: ")
    .setDescription("Visita la chat <#930465345502871552> per informazioni riguardanti il server! <@&916325158342500453>")
    .setThumbnail("https://cdn.discordapp.com/attachments/932277390057541722/957403344744366080/logoanarchy.gif")
    .setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
    
  message.channel.send({embeds: [embed]})
  
}})



//❌SERVER OFF
client.on("messageCreate", (message) => {
  if(message.content == "!off"){
    message.channel.bulkDelete(1, true)

    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non hai il permesso');
      return;
    }
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
      message.channel.send('Non ho il permesso');
      return;
    }
    
    var embed = new Discord.MessageEmbed()
  
    .setColor ("#ff0000")
    .setAuthor ("⚡UENS ESPORT⚡")
    .setTitle ("\:x: SERVER OFF \:x: ")
    .setDescription("<@&916325158342500453>")
    .setThumbnail("https://media.discordapp.net/attachments/887735211369041981/958458311500525628/trucebaldazzi-piu-reale-del-vero-trucebaldazzi.jpg")
    .setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
    
  message.channel.send({embeds: [embed]})

  
}})
 //comando clear
client.on("message", message => {
  if (message.content.startsWith("!clear")) {

      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
          message.channel.send('Non hai il permesso');
          return;
      }
      if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
          message.channel.send('Non ho il permesso');
          return;
      }

      var count = message.content.slice(7);
      count = parseInt(count);

      if (!count) {
          message.channel.send("Inserisci un numero valido")
          return
      }

      message.channel.bulkDelete(count +1 , true)
      message.channel.send(count + " messaggi eliminati").then(msg => {
          msg.delete({ timeout: 1000 })
      })

  }
})

//funzione play
const { DisTube, DisTubeStream } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")
const distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})

client.on("messageCreate",message => {
if(message.content.startsWith("!azzicca")){
const voiceChannel = message.member.voice.channel
if (!voiceChannel) {
    return message.channel.send("Devi essere in un canale vocale")
   } 

   const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
   if(voiceChannelBot && voiceChannel.id != voiceChannelBot.id){
       return message.channel.send("Qualcun altro sta già ascoltando della musica")
   }
   let args = message.content.split(/\s+/)
   let query = args.slice(1).join(" ") 

   if (!query) {
       return message.channel.send("Inserisci la canzone che vuoi ascoltare")
    }

    distube.play(voiceChannelBot || voiceChannel, query,{
        member: message.member,
        textChannel: message.channel,
        message: message
    })
  }
//funzione skip
if(message.content == "!skip"){
  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) {
      return message.channel.send("Devi essere in un canale vocale")
     } 

     const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
     if(voiceChannelBot && voiceChannel.id != voiceChannelBot.id){
         return message.channel.send("Qualcun altro sta già ascoltando della musica")
     }

    try  {
      distube.skip(message)
     } catch {

    } 
  } 
  //fine funzione skip
  //funzione stop
  if(message.content == "!stop"){
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
        return message.channel.send("Devi essere in un canale vocale")
       } 

       const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
       if(voiceChannelBot && voiceChannel.id != voiceChannelBot.id){
           return message.channel.send("Qualcun altro sta già ascoltando della musica")
       }

      try  {
        distube.stop(message)
       } catch {

      } 
    } 
})
//fine funzione stop
//comando !play
distube.on("playSong", (queue, song) => {
  var embed = new Discord.MessageEmbed()
  .setTitle(song.name)
  .setDescription ("Canzone in riproduzione")
  .setURL(song.url)
  .setColor ("#ff0000")
  queue.textChannel.send({embeds: [embed]})
})
//comando musica (!stop)
client.on("messageCreate", (message) => {
  if(message.content == "!stop"){
var embed = new Discord.MessageEmbed()
.setColor ("#ff0000")
.setDescription ("Musica Stoppata!")
message.channel.send({embeds: [embed]})
}
})

//comando musica (!skip)
client.on("messageCreate", (message) => {
  if(message.content == "!skip"){
var embed = new Discord.MessageEmbed()
.setColor ("#ff0000")
.setDescription ("Musica skippata con successo!")
.setFooter("𝘋𝘦𝘷 𝘣𝘺 𝘭𝘦𝘰")
message.channel.send({embeds: [embed]})
}
})
