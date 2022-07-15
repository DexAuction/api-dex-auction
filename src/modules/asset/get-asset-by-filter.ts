import { IsOptional, IsString } from 'class-validator';
export class GetAssetByFilter {
  @IsOptional()
  @IsString()
  owner: string;

  //Commented as category are not yet active.
  // @IsOptional()
  // @IsString()
  // category: string;

  @IsOptional()
  @IsString()
  assetTokenId: string;

  @IsOptional()
  @IsString()
  assetContractAddress: string;
}
