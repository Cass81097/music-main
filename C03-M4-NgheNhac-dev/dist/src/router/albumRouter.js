"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albumController_1 = __importDefault(require("../controller/albumController"));
const albumRouter = (0, express_1.Router)();
albumRouter.get('/', albumController_1.default.findAll);
albumRouter.post('', albumController_1.default.add);
albumRouter.put('/:id', albumController_1.default.update);
albumRouter.delete('/:id', albumController_1.default.delete);
exports.default = albumRouter;
//# sourceMappingURL=albumRouter.js.map