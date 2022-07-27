import { IsOptional, IsString } from "class-validator";
export class GetAuctionQuery {
  @IsOptional()
  @IsString()
  state: String;

  //Commented as category are not yet active.
  // @IsOptional()
  // @IsString()
  // category: string;

  @IsOptional()
  @IsString()
  owner: String;
}
