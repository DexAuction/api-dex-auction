import { Controller, Get, Query } from '@nestjs/common';
import { AssetService } from './asset.service';
import { GetAssetByFilter } from './get-asset-by-filter';
import { GetAssetResponseModel } from 'src/dtos/GetAssetResponseModel';

@Controller('asset')
export class AssetController {
  constructor(private assetService: AssetService) {}
  @Get('assets-by-filter')
  getAuctions(
    @Query() query: GetAssetByFilter
  ): Promise<Array<GetAssetResponseModel>> {
    return this.assetService.getAssets(query);
  }
}
