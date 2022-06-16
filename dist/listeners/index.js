System.register(["./on-ready", "./on-message-create", "./on-interaction-create"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (on_ready_1_1) {
                exports_1({
                    "onReady": on_ready_1_1["onReady"]
                });
            },
            function (on_message_create_1_1) {
                exports_1({
                    "onMessageCreate": on_message_create_1_1["onMessageCreate"]
                });
            },
            function (on_interaction_create_1_1) {
                exports_1({
                    "onInteractionCreate": on_interaction_create_1_1["onInteractionCreate"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map