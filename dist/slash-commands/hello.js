System.register(["@discordjs/builders"], function (exports_1, context_1) {
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
    var builders_1, HelloCommand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (builders_1_1) {
                builders_1 = builders_1_1;
            }
        ],
        execute: function () {
            exports_1("HelloCommand", HelloCommand = {
                command: new builders_1.SlashCommandBuilder()
                    .setName('hello')
                    .setDescription('Returns a greeting'),
                run(interaction) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield interaction.reply({
                            content: `Hello ${interaction.user.username}`,
                        });
                    });
                }
            });
        }
    };
});
//# sourceMappingURL=hello.js.map