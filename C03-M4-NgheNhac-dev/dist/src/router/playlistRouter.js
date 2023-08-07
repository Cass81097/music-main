"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlistController_1 = __importDefault(require("../controller/playlistController"));
const playlistRouter = (0, express_1.Router)();
playlistRouter.get('', playlistController_1.default.findAll);
playlistRouter.post('', playlistController_1.default.add);
playlistRouter.put('/:id', playlistController_1.default.update);
playlistRouter.delete('/:id', playlistController_1.default.delete);
exports.default = playlistRouter;
//# sourceMappingURL=playlistRouter.js.map