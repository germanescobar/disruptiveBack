"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var express_2 = __importDefault(require("./config/express"));
var swagger_1 = __importDefault(require("./config/swagger"));
var routes_1 = __importDefault(require("./routes"));
// setup server
var app = (0, express_1.default)();
exports.server = (0, http_1.createServer)(app);
var env = process.env.NODE_ENV;
var port = process.env.PORT || 8080;
// if (env !== 'test') {
//   connectDB();
// }
// setup express
(0, express_2.default)(app);
// routes
(0, routes_1.default)(app);
// Swagger
(0, swagger_1.default)(app, port);
exports.default = app;
//# sourceMappingURL=app.js.map