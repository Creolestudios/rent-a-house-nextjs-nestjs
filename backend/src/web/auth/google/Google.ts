// Import necessary modules and libraries
import { config } from 'dotenv';
import { google } from 'googleapis';

config();

const auth = new google.auth.OAuth2(
  .GOOGLE_CLIENT_ID,
  .GOOGLE_SECRET,
  `${.APP_URL}/home`,
);

export const Google = {
  authUrl: auth.generateAuthUrl({
    access_type: 'online',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  }),
  logIn: async (code: string) => {
    const { tokens } = await auth.getToken(code);

    auth.setCredentials(tokens);

    const { data } = await google.people({ version: 'v1', auth }).people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses,names,photos',
    });

    return { user: data, token: tokens };
  },
};
