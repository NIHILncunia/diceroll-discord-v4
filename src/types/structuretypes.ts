import {
  Client, ClientEvents, CommandInteraction, SlashCommandBuilder
} from 'discord.js';

export interface Command {
  data: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
  // eslint-disable-next-line no-unused-vars
  execute(client: Client, interaction: CommandInteraction): Promise<void>;
}

export interface Event {
  name: keyof ClientEvents;
  once?: boolean;
  // eslint-disable-next-line no-unused-vars
  execute(client: Client, ...args: any): any;
}
