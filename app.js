const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
console.log('AICPbot booted up!')

});

client.on('message', msg => {
    if (msg.content === 'Ping') {
      msg.reply('Pong!');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r1') {
        const channel = msg.channel
      channel.send('```Rule 1\nBe friendly. That means that you must not harass others or use bad words.```');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r2') {
        const channel = msg.channel
      channel.send('```Rule 2\nAlts are not allowed, even if you are not banned.```');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r3') {
        const channel = msg.channel
      channel.send('```Rule 3\nPiracy of any kind is not allowed on this server.```');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r4') {
        const channel = msg.channel
      channel.send('```Rule 4\nDo not post NSFW images at all. Breaking this rule will lead to a ban.```');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r5') {
        const channel = msg.channel
      channel.send('```Rule 5\nDo not beg for roles.```');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!r6') {
        const channel = msg.channel
      channel.send('```Rule 6\nSpamming and/or shitposting is not allowed.```');
    }
  });
  client.on('message', message => {
    if (message.content === '!AICP avatar') {
      message.reply(message.author.avatarURL);
      message.delete(1000); //Supposed to delete message
    };
  });
  client.on('message', message => {
    if (message.content === '!AICP commands') {
        const channel = message.channel
        channel.send(' ```\n-----Rules-----\n!r1: Shows the first rule\n!r2: Shows the second rule\n!r3: Shows the third rule\n!r4: Shows the fourth rule\n!r5: Shows the fifth rule\n!r6: Shows the sixth rule\n\n-----General commands-----  \n!AICP avatar: this will show your avatar \n!AICP commands: This shows all aviable commands \n \n-----Mod commands----- \n!AICP kick @username: kicks the tagged person\n!AICP ban @username: bans the tagged person\n!AICP shutdown: lets the bot shutdown```');

    };
  });
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

  client.on('message', message => {
    if (message.content === '!AICP shutdown') {
        if(message.member.roles.find("name", "owner")){
            process.exit();
        };
    };
  });

  client.on("message", (message) => {
    if (message.content.startsWith("!AICP kick")) {
        if(message.member.roles.find("name", "owner")){
        var member= message.mentions.members.first();
        member.kick().then((member) => {
        }).catch(() => {
        });
    }
};
});
client.on("message", (message) => {
    if (message.content.startsWith("!AICP ban")) {
        if(message.member.roles.find("name", "owner")){
        var member= message.mentions.members.first();
        member.ban().then((member) => {
        }).catch(() => {
        });
    }
};
});
  client.login(process.env.BOT_TOKEN);