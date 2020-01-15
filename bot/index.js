const Discord = require('discord.js');
const { prefix,token} = require('./config.json')
const client = new Discord.Client();
const { getCat,getBirb, getDog, getDuck, getFox, getShibe } = require('animals-api');
client.once('ready', () => {
console.log('Ready!')
})


client.on('message', message => {
    if(message.member.hasPermission(["KICK_MEMBERS","BAN_MEMBERS"])) {
    if(message.content.startsWith(`${prefix}kick`)){

        let member = message.mentions.members.first();
    member.kick()
    .then(console.log)
    .catch(console.error)
            message.channel.send(member.displayName + " got slammed in the head by the big ban theory")
        }

    }
   
    if (message.content === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    else if(message.content == 'beep'){
        message.channel.send("boop")
    }
    else if(message.content == 'boop'){
        message.channel.send("b33p")
    }
    else if(message.content == "ovo"){
        message.channel.send("ovo!!!!")
    }
    else if(message.content == "he walcc"){
        message.channel.send("he walcc https://www.youtube.com/watch?v=pMK8Cr10mEs&list=PLlcXcR4VN7fSNI6ValfVvRDvvRq4kDAhr")
    }
    else if(message.content == "shrug"){
        message.channel.send("¯\_(ツ)_/¯")
    }
else if(message.content == "7u7"){
    message.channel.send("( ͡° ͜ʖ ͡°)")
}
else if(message.content.startsWith(`${prefix}birb`)){
getBirb("jpg")
.then((res) =>message.channel.send(res)) 
}
else if(message.content.startsWith(`${prefix}shibe`)){
    getShibe("jpg")
    .then((res) =>message.channel.send(res)) 
    }
    else if(message.content.startsWith(`${prefix}cat`)){
        getCat("gif")
        .then((res) =>message.channel.send(res)) 
        }
        else if(message.content.startsWith(`${prefix}fox`)){
            getFox("jpg")
            .then((res) =>message.channel.send(res)) 
            }
            else if(message.content.startsWith(`${prefix}dog`)){
                getDog("jpg")
                .then((res) =>message.channel.send(res)) 
                }
        else if(message.content.startsWith(`${prefix}ducc`)){
            getDuck('gif')
            .then((res) =>console.log(res), message.channel.send(res)) 
           .catch((error) => message.channel.send(error))
        }

 if(message.content == "@everyone"){
     message.channel.send("https://imgflip.com/i/38mw9j")
 }
 else if(message.content =='@Just ByJugator340#3731'){
     message.channel.send("my creator got pingponged :ping_pong:")
 }
 else if(message.content.startsWith(`${prefix}rainbowparrot`)){
message.channel.send("https://media.discordapp.net/attachments/614465306173112331/614465617897979935/papagaio_loucao_mine-1.gif")
 }
 const memes = require('discord-meme-generator');
if(message.content.startsWith(`${prefix}meme`)){
memes.generate(client,message)
}
else if(message.content.startsWith(`${prefix}rules`)){
message.channel.send("> rules")
};

})


client.login(token)