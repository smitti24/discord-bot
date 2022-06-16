import { Client } from 'discord.js';
import { SlashCommands } from '../slash-commands';

export const onReady = (client: Client) => {
  client.on('ready', () => {
    console.log(`${client?.user?.username}`);

    const commands = SlashCommands.map((slashCommand) =>
      slashCommand.command.toJSON()
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client.application?.commands.set(commands as any);
  });
};
