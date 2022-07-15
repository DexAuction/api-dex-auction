import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ClientAuthToken,
  ClientAuthTokenDocument,
} from './clientAuthToken.schema';

@Injectable()
export class ClientAuthTokenService {
  constructor(
    @InjectModel(ClientAuthToken.name)
    private clientauth: Model<ClientAuthTokenDocument>
  ) {}

  async getKeySetting(
    key: string,
    _token: String,
    _clientId: String
  ): Promise<boolean> {
    if (key != 'api_key') {
      throw new HttpException(
        `Not found  key "${key}`,
        HttpStatus.UNAUTHORIZED
      );
    }
  
    const checkKey = await this.clientauth.findOne({
     client_id:_clientId
    });
    if (!checkKey) {
      throw new HttpException(
        `Not found client with ID  "${_clientId}"`,
        HttpStatus.UNAUTHORIZED
      );
    }
    if (checkKey.token === _token) {
      return true;
    } else {
      throw new HttpException(
        ` key: ${key} and value ${_token} doesnot match`,
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  async addKey(_clientId, _value): Promise<any> {
    const KeyID = await this.clientauth.count();
    const addClientAuth = new this.clientauth({
      keyId: KeyID,
      client_id: _clientId,
      token: _value,
    });
    await addClientAuth.save();
  }
}
