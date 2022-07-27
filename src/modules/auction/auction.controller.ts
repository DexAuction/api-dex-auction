import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { AuctionService } from "./auction.service";
import { GetAuctionQuery } from "./getAuctionQuery";
import { GetAuctionResponseModel } from "src/dtos/GetAuctionResponseModel";
import { ValidationGuard } from "../../helpers/validation.guard";

@Controller("auction")
export class AuctionController {
  constructor(private auctionService: AuctionService) {}
  @Get("auction-by-id/:auctionId")
  @UseGuards(ValidationGuard)
  getAuction(
    @Param("auctionId") auctionId: Number
  ): Promise<GetAuctionResponseModel> {
    return this.auctionService.getAuctionById(auctionId);
  }

  @Get("auctions-by-filter")
  @UseGuards(ValidationGuard)
  getAuctions(
    @Query() query: GetAuctionQuery
  ): Promise<Array<GetAuctionResponseModel>> {
    return this.auctionService.getAuctions(query);
  }
}
