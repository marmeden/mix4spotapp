const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

const spotifyApi = new SpotifyWebApi({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'http://localhost:3000/callback'
});

app.get('/login', (req, res) => {
  const scopes = ['user-read-private', 'user-read-email'];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  res.redirect(authorizeURL);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token, expires_in } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    setTimeout(async () => {
      const data = await spotifyApi.refreshAccessToken();
      const { access_token } = data.body;
      spotifyApi.setAccessToken(access_token);
    }, expires_in * 1000);
    res.send('Logged in!');
  } catch (err) {
    console.log(err);
    res.send('Error!');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
