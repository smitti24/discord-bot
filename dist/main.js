System.register(["discord.js", "./config", "./listeners"], function (exports_1, context_1) {
    "use strict";
    var discord_js_1, config_1, listeners_1, client;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (discord_js_1_1) {
                discord_js_1 = discord_js_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (listeners_1_1) {
                listeners_1 = listeners_1_1;
            }
        ],
        execute: function () {
            client = new discord_js_1.Client({
                intents: [
                    discord_js_1.Intents.FLAGS.GUILDS,
                    discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
                    discord_js_1.Intents.FLAGS.DIRECT_MESSAGES,
                ],
                partials: ['CHANNEL'],
            });
            listeners_1.onReady(client);
            listeners_1.onMessageCreate(client);
            listeners_1.onInteractionCreate(client);
            client.login(config_1.TOKEN);
        }
    };
});
//# sourceMappingURL=main.js.map