"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SongRouter_1 = __importDefault(require("./SongRouter"));
const userRouter_1 = require("./userRouter");
const playlistRouter_1 = __importDefault(require("./playlistRouter"));
const albumRouter_1 = __importDefault(require("./albumRouter"));
const router = (0, express_1.Router)();
router.use('/songs', SongRouter_1.default);
router.use('/playlists', playlistRouter_1.default);
router.use('/albums', albumRouter_1.default);
router.use('', userRouter_1.userRouter);
exports.default = router;
//# sourceMappingURL=Router.js.map