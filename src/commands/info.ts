import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '@/types/structuretypes';

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
      .setThumbnail('https://nihilapp.github.io/dice/images/site-image.png')
      .setFields([
        {
          name: '**/핑**',
          value: '봇의 핑을 보여줍니다.',
        },
        {
          name: '**/정보**',
          value: '봇에 대한 정보를 보여줍니다.',
        },
        {
          name: '**/종료**',
          value: '봇의 시스템을 종료하기 전에 알리는 용도로 제작자만 사용합니다.',
        },
        {
          name: '**/프리셋**',
          value: '미리 준비된 주사위를 굴릴 수 있습니다.',
        },
        {
          name: '**/커스텀**',
          value: '주사위식을 여러개 입력할 수도 있는 커스텀 주사위입니다. 하나의 주사위식은 공백으로 구분합니다. 보정치는 + 혹은 -로 감지하며 같은 주사위식을 여러번 굴리고 싶은 경우 *를 이용해 입력하면 됩니다.',
        },
      ]);

    await interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
