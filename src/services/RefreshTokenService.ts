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

    spotifyApi
      .refreshAccessToken()
      .then((data) => {
        accessToken = data.body.access_token;
        expiresIn = data.body.expires_in;
      })
      .catch((err) => {
        console.log(err);
      });

    return { accessToken, expiresIn };
  }
}

export { RefreshTokenService };
