import { Client, GatewayIntentBits } from 'discord.js';
import Bot from './structure/Bot';

require('dotenv').config();

export const bot = new Bot(new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
  ],
}));
