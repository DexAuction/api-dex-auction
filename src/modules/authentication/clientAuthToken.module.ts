import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientAuthTokenController } from './clientAuthToken.controller';
import { ClientAuthToken, ClientAuthTokenSchema } from './clientAuthToken.schema';
import { ClientAuthTokenService } from './clientAuthToken.service';
@Module({
  imports: [
    HttpModule,
    MongooseModule,
    MongooseModule.forFeature([
      { name: ClientAuthToken.name, schema: ClientAuthTokenSchema } ]),
  ],
  controllers: [ClientAuthTokenController],
  providers: [ClientAuthTokenService],
  exports: [ClientAuthTokenService],
})
export class ClientAuthTokenModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
