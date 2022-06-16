System.register(["./hello"], function (exports_1, context_1) {
    "use strict";
    var hello_1, SlashCommands;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }
        ],
        execute: function () {
            exports_1("SlashCommands", SlashCommands = [
                hello_1.HelloCommand
            ]);
        }
    };
});
//# sourceMappingURL=index.js.map