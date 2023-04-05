import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '@/types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('정보')
    .setDescription('봇에 대한 정보를 보여줍니다..'),
  async execute(client, interaction) {
    const embed = new EmbedBuilder()
      .setColor('Red')
      .setTitle('DiceRoll V4')
      .setDescription('DiceRoll 디스코드 봇입니다. 원하는 다이스를 굴릴 수 있고, 준비된 프리셋 중에서도 다이스를 굴릴 수 있습니다.')
      .setAuthor({
        name: 'NIHILncunia',
        iconURL: 'https://avatars.githubusercontent.com/u/14324697?v=4',
        url: 'https://github.com/NIHILncunia',
      })
      .setImage('https://nihilapp.github.io/dice/images/site-image.png')
      .setFields([ {
        name: '**/핑**',
        value: '봇의 핑을 보여줍니다.',
      }, {
        name: '**/정보**',
        value: '봇에 대한 정보를 보여줍니다.',
      }, {
        name: '**/종료**',
        value: '봇의 시스템을 종료하기 전에 알리는 용도로 제작자만 사용합니다.',
      }, ]);

    interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
