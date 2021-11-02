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

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        accessToken = data.body.access_token;
        refreshToken = data.body.refresh_token;
        expiresIn = data.body.expires_in;

        return { accessToken, refreshToken, expiresIn };
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export { LoginService };
