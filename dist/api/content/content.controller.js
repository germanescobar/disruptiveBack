"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.deleteOneContent = exports.updateOneContent = exports.createOneContent = exports.filterByAllContent = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function filterByAllContent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, topicName, userId, category, page, pagination, response, total, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = (req.query.name || '').toString();
                    topicName = (req.query.topicName || '').toString();
                    userId = Number(req.query.userId || 0);
                    category = req.query.category;
                    page = Number(req.query.page);
                    pagination = Number(req.query.pagination || 100);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma.content.findMany({
                            orderBy: [{ id: 'asc' }],
                            skip: pagination * (page - 1),
                            take: pagination,
                            where: __assign(__assign({ name: { contains: name, mode: 'insensitive' }, topicName: { contains: topicName, mode: 'insensitive' } }, (userId !== 0 && { userId: userId })), (category !== undefined && { category: category })),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, prisma.content.findMany({
                            orderBy: [{ id: 'asc' }],
                            where: __assign(__assign({ name: { contains: name, mode: 'insensitive' }, topicName: { contains: topicName, mode: 'insensitive' } }, (userId !== 0 && { userId: userId })), (category !== undefined && { category: category })),
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
exports.filterByAllContent = filterByAllContent;
function createOneContent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userId, name, description, urlImage, url, topicName, category, response, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, userId = _a.userId, name = _a.name, description = _a.description, urlImage = _a.urlImage, url = _a.url, topicName = _a.topicName;
                    category = (req.body.category || '');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.user.update({
                            where: { id: userId },
                            data: {
                                contents: {
                                    create: {
                                        name: name,
                                        description: description,
                                        urlImage: urlImage,
                                        url: url,
                                        updatedAt: new Date(),
                                        category: category,
                                        topicName: topicName
                                    },
                                },
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'Something went wrong' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createOneContent = createOneContent;
function updateOneContent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, description, urlImage, url, category, response, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, name = _a.name, description = _a.description, urlImage = _a.urlImage, url = _a.url;
                    category = (req.body.category || '');
                    console.log(req.body);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.content.update({
                            where: { id: id },
                            data: {
                                name: name,
                                description: description,
                                urlImage: urlImage,
                                url: url,
                                updatedAt: new Date(),
                                category: category
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_3 = _b.sent();
                    console.log("err", err_3);
                    return [2 /*return*/, res.status(400).json({ message: 'Something went wrong' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateOneContent = updateOneContent;
function deleteOneContent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var contentId, response, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contentId = req.params.contentId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.content.delete({
                            where: { id: Number(contentId) },
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
exports.deleteOneContent = deleteOneContent;
/**
 * @openapi
 * components:
 *  schemas:
 *    ListContentResponse:
 *     type: array
 *     items:
 *        $ref: '#/components/schemas/CreateContentResponse'
 *    CreateContentResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        password:
 *          type: string
 *        updatedAt:
 *          type: string
 *    CreateContentRequest:
 *     email:
 *       type: string
 *      password:
 *       type: string
 *      type:
 *       type: string
 *     required:
 *      - email
 *      - password
 *      - type
 *    DeleteOneContentInput:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: 0
 *      required:
 *        - id
 */ 
//# sourceMappingURL=content.controller.js.map