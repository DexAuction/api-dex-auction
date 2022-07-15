import { Controller,Post,Body } from '@nestjs/common';
import { ClientAuthTokenService } from './clientAuthToken.service';

@Controller('clientAuthToken')
export class ClientAuthTokenController {
  constructor(private clientAuthToken: ClientAuthTokenService) {}
 
  @Post()
  async addClientAuthToken(
    @Body() auth: any
  ): Promise<any> {
    return this.clientAuthToken.addKey(auth.client_id,auth.token);
  }

}
