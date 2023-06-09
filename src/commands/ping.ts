import {
  Client, CommandInteraction, EmbedBuilder, SlashCommandBuilder
} from 'discord.js';
import { Command } from '@/types/structuretypes';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('핑')
    .setDescription('봇의 핑을 보여줍니다.'),
  async execute(client: Client, interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
      .setColor('Red')
      .setFields([
        {
          name: '핑',
          value: `**${client.ws.ping}ms**`,
        },
      ]);

    await interaction.reply({
      embeds: [ embed, ],
    });
  },
};

export default command;
