import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '@/types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('종료')
    .setDescription('봇의 시스템을 종료하기 전에 알리는 용도로 제작자만 사용합니다.'),
  async execute(client, interaction) {
    const embed = new EmbedBuilder()
      .setColor('Red')
      .setFields([
        {
          name: '종료 메시지',
          value: `봇의 시스템이 곧 종료됩니다. [${interaction.user.username}]`,
        },
      ]);

    interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
