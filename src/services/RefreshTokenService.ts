import SpotifyWebApi from 'spotify-web-api-node';

class RefreshTokenService {
  async execute(refreshToken: string) {
    let accessToken = '';
    let expiresIn = 0;

    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });

    const result = await spotifyApi.refreshAccessToken();

    accessToken = result.body.access_token;
    expiresIn = result.body.expires_in;

    return { accessToken, expiresIn };
  }
}

export { RefreshTokenService };
