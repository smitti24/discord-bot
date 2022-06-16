System.register(["@discordjs/rest", "./config", "./slash-commands", "discord-api-types/v9"], function (exports_1, context_1) {
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
    var rest_1, config_1, slash_commands_1, v9_1, registerGuildCommands;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rest_1_1) {
                rest_1 = rest_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (slash_commands_1_1) {
                slash_commands_1 = slash_commands_1_1;
            },
            function (v9_1_1) {
                v9_1 = v9_1_1;
            }
        ],
        execute: function () {
            registerGuildCommands = () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const commands = slash_commands_1.SlashCommands.map(({ command }) => command.toJSON());
                    console.log(commands);
                    const rest = new rest_1.REST({ version: '9' }).setToken(config_1.TOKEN);
                    console.log('Starting to refresh the guild commands ...');
                    yield rest.put(v9_1.Routes.applicationGuildCommands(config_1.APPLICATION_ID, config_1.GUILD_ID), {
                        body: commands
                    });
                    console.log('Sucessfully reloaded the guild commands');
                }
                catch (err) {
                    console.log(err);
                }
            });
            registerGuildCommands();
        }
    };
});
//# sourceMappingURL=register-guild-commands.js.map