import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ClientAuthTokenDocument = ClientAuthToken & Document;
@Schema({ collection: 'clientAuthToken' })
export class ClientAuthToken {
  @Prop({ default: 0, unique: true, })
  keyId: number;
  @Prop()
  client_id: String;
  @Prop()
  token: String;
}
export const ClientAuthTokenSchema = SchemaFactory.createForClass(
  ClientAuthToken
);
