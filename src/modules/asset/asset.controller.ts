import { Controller, Get, Query,UseGuards } from '@nestjs/common';
import { AssetService } from './asset.service';
import { GetAssetByFilter } from './get-asset-by-filter';
import { GetAssetResponseModel } from 'src/dtos/GetAssetResponseModel';
import { ValidationGuard } from '../../helpers/validation.guard';

@Controller('asset')
export class AssetController {
  constructor(private assetService: AssetService) {}
  @Get('assets-by-filter')
  @UseGuards(ValidationGuard)
  getAsset(
    @Query() query: GetAssetByFilter
  ): Promise<Array<GetAssetResponseModel>> {
    return this.assetService.getAssets(query);
  }
}