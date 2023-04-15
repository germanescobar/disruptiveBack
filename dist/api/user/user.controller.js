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
exports.deleteOneUser = exports.updateOneUser = exports.createOneUser = exports.authenticateUser = exports.filterByAllUser = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function filterByAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, type, page, pagination, response, total, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = (req.query.email || '').toString();
                    type = req.query.typeUser;
                    page = Number(req.query.page);
                    pagination = Number(req.query.pagination || 10);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma.user.findMany({
                            orderBy: [{ id: 'asc' }],
                            skip: pagination * (page - 1),
                            take: pagination,
                            where: __assign({ email: { contains: email, mode: 'insensitive' } }, (type !== undefined && { type: type })),
                            include: { contents: true },
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, prisma.user.findMany({
                            orderBy: [{ id: 'asc' }],
                            where: __assign({ email: { contains: email, mode: 'insensitive' } }, (type !== undefined && { type: type })),
                        })];
                case 3:
                    total = _a.sent();
                    return [2 /*return*/, res.status(200).json({
                            message: { data: response, total: total.length },
                        })];
                case 4:
                    err_1 = _a.sent();
                    return [2 /*return*/, res.status(500).json({ message: 'Something went wrong' })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.filterByAllUser = filterByAllUser;
function authenticateUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, response, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, password = _a.password;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.user.findMany({
                            where: {
                                email: { equals: (email || '').toString(), mode: 'insensitive' },
                                password: { equals: (password || '').toString(), mode: 'insensitive' },
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.status(500).json({ message: 'Something went wrong' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.authenticateUser = authenticateUser;
function createOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, type, password, response, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, type = _a.type, password = _a.password;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: email,
                                password: password,
                                type: type,
                                updatedAt: new Date(),
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_3 = _b.sent();
                    console.log('err', err_3);
                    return [2 /*return*/, res.status(500).json({ message: err_3 })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createOneUser = createOneUser;
function updateOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, email, type, password, response, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, email = _a.email, type = _a.type, password = _a.password;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.user.update({
                            where: { id: id },
                            data: {
                                email: email,
                                password: password,
                                type: type,
                                updatedAt: new Date(),
                            },
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_4 = _b.sent();
                    return [2 /*return*/, res.status(500).json({ message: err_4 })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateOneUser = updateOneUser;
function deleteOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, response, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.userId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.user.delete({
                            where: { id: Number(userId) },
                        })];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: response })];
                case 3:
                    err_5 = _a.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'Something went wrong' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteOneUser = deleteOneUser;
/**
 * @openapi
 * components:
 *  schemas:
 *    ListUserResponse:
 *     type: array
 *     items:
 *        $ref: '#/components/schemas/CreateUserResponse'
 *    CreateUserResponse:
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
 *    AuthenticateRequest:
 *     type: object
 *     properties:
 *      email:
 *       type: string
 *      password:
 *       type: string
 *     required:
 *      - email
 *      - password
 *    CreateUserRequest:
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
 *    DeleteOneUserInput:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: 0
 *      required:
 *        - id
 */ 
//# sourceMappingURL=user.controller.js.map