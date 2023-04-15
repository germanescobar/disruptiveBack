"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./api/user"));
var topic_1 = __importDefault(require("./api/topic"));
var content_1 = __importDefault(require("./api/content"));
function routes(app) {
    app.use('/api/user', user_1.default);
    app.use('/api/topic', topic_1.default);
    app.use('/api/content', content_1.default);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map