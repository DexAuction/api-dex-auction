import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APIUtil } from '../../helpers/util';
import { AuctionController } from './auction.controller';
import { Auction, AuctionSchema } from './auction.schema';
import { AuctionService } from './auction.service';
import { ClientAuthTokenService } from '../authentication/clientAuthToken.service';
import {
  ClientAuthTokenSchema,
  ClientAuthToken,
} from '../authentication/clientAuthToken.schema';
@Module({
  imports: [
    HttpModule,
    MongooseModule,
    MongooseModule.forFeature([
      { name: Auction.name, schema: AuctionSchema },
      { name: ClientAuthToken.name, schema: ClientAuthTokenSchema },
    ]),
  ],
  controllers: [AuctionController],
  providers: [AuctionService, ClientAuthTokenService, APIUtil],
  exports: [AuctionService],
})
export class AuctionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
