System.register(["dotenv"], function (exports_1, context_1) {
    "use strict";
    var dotenv_1, TOKEN, APPLICATION_ID, GUILD_ID;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (dotenv_1_1) {
                dotenv_1 = dotenv_1_1;
            }
        ],
        execute: function () {
            dotenv_1.default.config();
            exports_1("TOKEN", TOKEN = process.env.TOKEN || '');
            exports_1("APPLICATION_ID", APPLICATION_ID = process.env.APPLICATION_ID || '');
            exports_1("GUILD_ID", GUILD_ID = process.env.GUILD_ID || '');
        }
    };
});
//# sourceMappingURL=config.js.map