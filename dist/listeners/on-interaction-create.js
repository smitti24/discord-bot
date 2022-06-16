System.register(["../slash-commands"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var slash_commands_1, onInteractionCreate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (slash_commands_1_1) {
                slash_commands_1 = slash_commands_1_1;
            }
        ],
        execute: function () {
            exports_1("onInteractionCreate", onInteractionCreate = (client) => {
                client.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
                    if (interaction.isCommand()) {
                        yield handleSlashCommand(interaction);
                    }
                }));
                const handleSlashCommand = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
                    const slashCommand = slash_commands_1.SlashCommands.find((slashCommand) => slashCommand.command.name === interaction.commandName);
                    if (!slashCommand) {
                        yield interaction.reply({
                            content: 'Content not found',
                        });
                        return;
                    }
                    yield slashCommand.run(interaction);
                });
            });
        }
    };
});
//# sourceMappingURL=on-interaction-create.js.map