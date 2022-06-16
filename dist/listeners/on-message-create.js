System.register([], function (exports_1, context_1) {
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
    var onMessageCreate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("onMessageCreate", onMessageCreate = (client) => {
                client.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
                    var _a, _b;
                    if (message.author.bot) {
                        return;
                    }
                    const content = message.content.toLocaleLowerCase();
                    if (content === '!lfg') {
                        yield message.reply(`${((_a = message.member) === null || _a === void 0 ? void 0 : _a.displayName) || ((_b = message.author) === null || _b === void 0 ? void 0 : _b.username)} pong`);
                    }
                }));
            });
        }
    };
});
//# sourceMappingURL=on-message-create.js.map