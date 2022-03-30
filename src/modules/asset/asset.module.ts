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
@Module({
  imports: [
    HttpModule,
    MongooseModule,
    MongooseModule.forFeature([{ name: Asset.name, schema: AssetSchema }]),
  ],
  controllers: [AssetController],
  providers: [AssetService, APIUtil],
  exports: [AssetService],
})
export class AssetModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
