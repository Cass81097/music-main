"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SongController_1 = __importDefault(require("../controller/SongController"));
const songRouter = (0, express_1.Router)();
songRouter.post('', SongController_1.default.add);
songRouter.get('/', SongController_1.default.findAllById);
songRouter.get('/name/', SongController_1.default.findOneByName);
songRouter.put('/:id', SongController_1.default.update);
songRouter.delete('/:id', SongController_1.default.delete);
exports.default = songRouter;
//# sourceMappingURL=SongRouter.js.map