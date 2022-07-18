import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientAuthTokenService } from './clientAuthToken.service';

@Controller('clientAuthToken')
export class ClientAuthTokenController {
  constructor(private clientAuthToken: ClientAuthTokenService) {}

  @Post()
  async addClientAuthToken(@Body() auth: any): Promise<any> {
    return this.clientAuthToken.addKey(auth.client_id, auth.token);
  }

  @Post('authenticate-client')
  async checkClientAuthentication(@Body() auth: any): Promise<any> {
    return this.clientAuthToken.getKeySetting(
      'api_key',
      auth.api_key,
      auth._clientId
    );
  }
}
