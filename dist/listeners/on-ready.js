System.register(["../slash-commands"], function (exports_1, context_1) {
    "use strict";
    var slash_commands_1, onReady;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (slash_commands_1_1) {
                slash_commands_1 = slash_commands_1_1;
            }
        ],
        execute: function () {
            exports_1("onReady", onReady = (client) => {
                client.on('ready', () => {
                    var _a, _b;
                    console.log(`${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.username}`);
                    const commands = slash_commands_1.SlashCommands.map((slashCommand) => slashCommand.command.toJSON());
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (_b = client.application) === null || _b === void 0 ? void 0 : _b.commands.set(commands);
                });
            });
        }
    };
});
//# sourceMappingURL=on-ready.js.map