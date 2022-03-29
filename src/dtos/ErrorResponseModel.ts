import { DetailMessage } from 'src/errors';

export interface ErrorResponseModel {
  memberId?: number;
  emailId?: string;
  partnerId?: string;
  httpCode: Number;
  message: DetailMessage;
}
