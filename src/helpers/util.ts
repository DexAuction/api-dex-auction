import { Injectable } from '@nestjs/common';
import axios from 'axios';
import axiosRetry from 'axios-retry';

@Injectable()
export class APIUtil {
  constructor() {}

  async sendPostRequest(
    data: any,
    url: string
  ): Promise<any> {


    axiosRetry(axios, {
      retries: 3,
      retryDelay: retryCount => {
        return retryCount * 5000;
      },
    });

    const rs = await axios.post(url, data, { });

    return rs.data;
  }

  async sendGetRequest(url: string, params): Promise<any> {


    axiosRetry(axios, {
      retries: 3,
      retryDelay: retryCount => {
        return retryCount * 5000;
      },
    });

    return await axios.get(url, { params });
  }
}
