import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '@/types/structuretypes';
import { multiRoll } from '@/utils/multiRoll';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('커스텀')
    .setDescription('여러분이 원하는대로 주사위를 굴릴 수 있습니다.')
    .addStringOption((option) => (
      option
        .setName('주사위식')
        .setDescription('주사위식을 입력하세요.')
        .setRequired(true)
    )),
  async execute(client, interaction) {
    const dice = interaction.options.get('주사위식').value as string;
    const result = multiRoll(dice);

    const embed = new EmbedBuilder()
      .setColor('Red')
      .setTitle(`${interaction.user.username}님의 주사위 결과`);

    for (let i = 0; i < result.length; i++) {
      embed.addFields({
        name: result[i].dice,
        value: result[i].detail,
      });
    }

    await interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
