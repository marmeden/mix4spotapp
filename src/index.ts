import express, { Application, Request, Response, NextFunction } from 'express';
import SpotifyWebApi from 'spotify-web-api-node'

const app: Application = express();

const spotifyApi = new SpotifyWebApi({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUri: 'http://localhost:3000/callback'
});

console.log(spotifyApi)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
