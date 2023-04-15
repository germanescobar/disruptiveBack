"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var logger_1 = __importDefault(require("../logger"));
var ext = process.env.NODE_ENV === 'production' ? '.js' : '.Ts';
var routesApi = path_1.default.join(__dirname, "../api/**/index".concat(ext));
var schemasApi = path_1.default.join(__dirname, "../api/**/**.controller".concat(ext));
var options = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Disruptive Backend',
            version: '1.0.0',
            description: 'API Documentation Disruptive Backend Proyect',
            contact: {
                name: 'Mi LinkedIn',
                url: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
                email: 'jesdaos@hotmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Local server',
            },
            {
                url: process.env.BASE_URL || 'http://localhost:8080',
                description: 'Production server',
            },
        ],
    },
    apis: [routesApi, schemasApi],
};
var swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Docs in JSON Format
    app.get('/docs.json', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    logger_1.default.info("\uD83D\uDCC3\uD83D\uDEE0 Docs available at http://localhost:".concat(port, "/docs"));
}
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map