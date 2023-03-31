"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const app = (0, express_1.default)();
const spotifyApi = new spotify_web_api_node_1.default({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUri: 'http://localhost:3000/callback'
});
console.log(spotifyApi);
app.get('/', (req, res, next) => {
    res.send('Hello, World!');
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
