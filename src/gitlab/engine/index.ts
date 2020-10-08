import axios, { AxiosResponse } from 'axios';

export class GitLabEngine {
  constructor(url) {
    // TODO: gitlab instance url validation
    this._url = url;
  }

    private _url: string;

    get url(): string {
      return this._url;
    }

    async request(method: 'get', endpoint: string) {
      const url = `${this.url}${endpoint}`;
      const response = await axios({
        method,
        url,
      }) as unknown as AxiosResponse<object[]>;
      const { data } = response;
      return data;
    }

    async get(endpoint: string) {
      const method = 'get';
      return this.request(method, endpoint);
    }
}
