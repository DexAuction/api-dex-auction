import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ClientAuthTokenService } from '../modules/authentication/clientAuthToken.service';

@Injectable()
export class ValidationGuard implements CanActivate {
  constructor(private clientAuthTokenService: ClientAuthTokenService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.api_key) {
      throw new HttpException(
        `Not found API key setting`,
        HttpStatus.UNAUTHORIZED
      );
    }
    const checkReq = await this.clientAuthTokenService.getKeySetting(
      "api_key",
      request.headers.api_key,
      request.headers.client_id ,
    );
    if (!checkReq) {
      throw new HttpException(
        `Not found key setting`,
        HttpStatus.UNAUTHORIZED
      );
    }
    return true;
  }
}
