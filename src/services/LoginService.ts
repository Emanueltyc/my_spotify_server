import SpotifyWebApi from 'spotify-web-api-node';

class LoginService {
  async execute(code: string) {
    let accessToken = '';
    let refreshToken = '';
    let expiresIn = 0;

    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    const result = await spotifyApi.authorizationCodeGrant(code);

    accessToken = result.body.access_token;
    refreshToken = result.body.refresh_token;
    expiresIn = result.body.expires_in;

    return { accessToken, refreshToken, expiresIn };
  }
}

export { LoginService };
