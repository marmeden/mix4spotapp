import Koa from 'koa';
import SpotifyWebApi from 'spotify-web-api-js';

// Initialize Spotify API client
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('YOUR_ACCESS_TOKEN_HERE');

async function main() {
  // Create a Koa app
  const app = new Koa();

  // Add a route to get a user's playlists
  app.use(async (ctx) => {
/*     const body  = await spotifyApi.getUserPlaylists('user_id');
    ctx.body = body; */
    ctx.body = 'heyyyy'
  });

  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

