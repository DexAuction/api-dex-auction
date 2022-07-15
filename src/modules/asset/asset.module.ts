import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APIUtil } from '../../helpers/util';
import { AssetController } from './asset.controller';
import { Asset, AssetSchema } from './asset.schema';
import { AssetService } from './asset.service';
import { ClientAuthToken, ClientAuthTokenSchema } from '../authentication/clientAuthToken.schema';
import { ClientAuthTokenService } from '../authentication/clientAuthToken.service';
@Module({
  imports: [
    HttpModule,
    MongooseModule,
    MongooseModule.forFeature([
      { name: Asset.name, schema: AssetSchema },
      { name: ClientAuthToken.name, schema: ClientAuthTokenSchema },
    ]),
  ],
  controllers: [AssetController],
  providers: [AssetService, ClientAuthTokenService,APIUtil],
  exports: [AssetService],
})
export class AssetModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
