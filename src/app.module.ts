import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetModule } from './modules/asset/asset.module';
import { AuctionModule } from './modules/auction/auction.module';
import { ClientAuthTokenModule } from './modules/authentication/clientAuthToken.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    AuctionModule,
    AssetModule,
    ClientAuthTokenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
