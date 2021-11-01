import { Request, Response } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';

class RefreshTokenService {
  async execute(req: Request, res: Response) {
    const refreshToken = req.body.refreshToken;

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
      .catch(() => {
        res.sendStatus(400);
      });

    return { accessToken, expiresIn };
  }
}

export { RefreshTokenService };
