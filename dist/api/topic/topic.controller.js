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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneTopic = exports.updateOneTopic = exports.createOneTopic = exports.getAllTopic = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function getAllTopic(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, urlImage, page, pagination, response, total, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = (req.query.name || '').toString();
                    urlImage = (req.query.urlImage || '').toString();
                    page = Number(req.query.page || 1);
                    pagination = Number(req.query.pagination || 100);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma.topic.findMany({
                            orderBy: [{ id: 'asc' }],
                            skip: pagination * (page - 1),
                            take: pagination,
                            where: {
                                name: { contains: name, mode: 'insensitive' },
                                urlImage: { contains: urlImage, mode: 'insensitive' },
                            },
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, prisma.topic.findMany({
                            orderBy: [{ id: 'asc' }],
                            where: {
                                name: { contains: name, mode: 'insensitive' },
                                urlImage: { contains: urlImage, mode: 'insensitive' },
                            },
                        })];
                case 3:
                    total = _a.sent();
                    return [2 /*return*/, res.status(200).json({
                            message: { data: response, total: total.length },
                        })];
                case 4:
                    err_1 = _a.sent();
                    console.log("err", err_1);
                    return [2 /*return*/, res.status(400).json({ message: 'Something went wrong' })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAllTopic = getAllTopic;
function createOneTopic(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, urlImage, categories, response, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, urlImage = _a.urlImage, categories = _a.categories;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.topic.create({
                            data: {
                                name: name,
                                urlImage: urlImage,
                                categories: categories,
                                updatedAt: new Date(),
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.status(500).json({ message: err_2 })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createOneTopic = createOneTopic;
function updateOneTopic(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, urlImage, categories, response, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, name = _a.name, urlImage = _a.urlImage, categories = _a.categories;
                    console.log("req.body", req.body);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.topic.update({
                            where: { id: id },
                            data: {
                                name: name,
                                urlImage: urlImage,
                                categories: categories,
                                updatedAt: new Date(),
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_3 = _b.sent();
                    return [2 /*return*/, res.status(500).json({ message: err_3 })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateOneTopic = updateOneTopic;
function deleteOneTopic(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var topicId, response, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    topicId = req.params.topicId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.topic.delete({
                            where: { id: Number(topicId) },
                        })];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_4 = _a.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'Something went wrong' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteOneTopic = deleteOneTopic;
/**
 * @openapi
 * components:
 *  schemas:
 *    ListTopicResponse:
 *     type: array
 *     items:
 *        $ref: '#/components/schemas/CreateTopicResponse'
 *    CreateTopicResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        urlImage:
 *          type: string
 *        categories:
 *          type: string
 *        updatedAt:
 *          type: string
 *    CreateTopicRequest:
 *      name:
 *       type: string
 *      urlImage:
 *       type: string
 *      categories:
 *       type: string
 *     required:
 *      - name
 *      - urlImage
 *      - categories
 *    DeleteOneTopicInput:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: 0
 *      required:
 *        - id
 */ 
//# sourceMappingURL=topic.controller.js.map