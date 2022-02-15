import config from '@config/api';
import axios, { AxiosInstance } from 'axios';

class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create(config);

    // intercepta quando houver erro 401 (unauthorized) e autentica automaticamente (fazendo o refresh do token)
    this.api.interceptors.response.use(
      response => response,
      async error => {
        const { status } = error.response;
        const { config: requestConfig } = error;
        if (status === 401) {
          await this.authenticate();
          const resp = await this.api.request(requestConfig);
          return Promise.resolve(resp);
        }
        return Promise.reject(error);
      },
    );
  }

  private async authenticate() {
    /* ...implement generate new access_token, example:

    const resp = await this.api.post(
      '/oauth/access-token',
      {
        grant_type: 'password',
        username: process.env.GS1_USER,
        password: process.env.GS1_PASS,
      },
      {
        auth: {
          username: process.env.GS1_CLIENT_ID || '',
          password: process.env.GS1_CLIENT_SECRET || '',
        },
      },
    );
    const { access_token } = resp.data;
    this.api.defaults.headers.common.access_token = access_token;
    this.api.defaults.headers.common.client_id =
      process.env.GS1_CLIENT_ID || '';

    */
  }

  // ...other api service methods
}

export default new Api();
