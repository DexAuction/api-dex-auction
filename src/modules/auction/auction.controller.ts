import { Controller, Get, Param, Query } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { GetAuctionQuery } from './getAuctionQuery';
import { GetAuctionResponseModel } from 'src/dtos/GetAuctionResponseModel';

@Controller('auction')
export class AuctionController {
  constructor(private auctionService: AuctionService) {}
  @Get('auction-by-id/:auctionId')
  getAuction(
    @Param('auctionId') auctionId: string
  ): Promise<GetAuctionResponseModel> {
    return this.auctionService.getAuctionById(auctionId);
  }

  @Get('auctions-by-filter')
  getAuctions(
    @Query() query: GetAuctionQuery
  ): Promise<Array<GetAuctionResponseModel>> {
    return this.auctionService.getAuctions(query);
  }
}
