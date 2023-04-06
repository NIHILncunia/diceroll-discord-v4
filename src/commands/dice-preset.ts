import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '@/types/structuretypes';
import { roll } from '@/utils/roll';
import { mainBreak } from '@/utils/mainDBreak';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('프리셋')
    .setDescription('미리 준비된 주사위를 굴릴 수 있습니다.')
    .addStringOption((option) => option.setName('주사위식')
      .setDescription('주사위식을 선택하세요.')
      .setRequired(true)
      .addChoices(
        { name: 'D2', value: 'D2', },
        { name: 'D4', value: 'D4', },
        { name: 'D6', value: 'D6', },
        { name: 'D8', value: 'D8', },
        { name: 'D10', value: 'D10', },
        { name: 'D12', value: 'D12', },
        { name: 'D20', value: 'D20', },
        { name: 'D100', value: 'D100', },
        { name: '3D6', value: '3D6', }
      )),
  async execute(client, interaction) {
    const diceString = interaction.options.get('주사위식').value as string;
    const dice = mainBreak(diceString);
    const result = roll(dice.d, dice.dn);

    const embed = new EmbedBuilder()
      .setColor('Red')
      .setFields([ {
        name: '주사위식',
        value: result.dice,
      }, {
        name: '결과',
        value: `**${result.total}**`,
      }, {
        name: '상세 결과',
        value: result.numbers,
      }, ]);

    await interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
