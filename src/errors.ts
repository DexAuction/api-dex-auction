// HTTP Error Codes
const HTTP_ERROR_CODE_NOT_FOUND = 404;
const HTTP_ERROR_CODE_BAD_REQUEST = 400;
const HTTP_ERROR_CODE_SERVER_ERROR = 500;
const HTTP_ERROR_CODE_FORBIDDEN = 403;
const HTTP_ERROR_CODE_UNATHORIZED = 401;
const HTTP_ERROR_CODE_METHOD_NOT_ALLOWED = 405;
const HTTP_ERROR_CODE_NOT_IMPLEMENTED = 501;

// Error Messages

const ERROR_EMPTY_DATA: DetailMessage = {
    code: 'DEXA-ERR-5001',
    description: 'Empty Request Data',
  };
  
  const ERROR_MISSING_REQUIRED_FIELDS: DetailMessage = {
    code: 'DEXA-ERR-5002',
    description: 'Missing required fields'
  };
  
  const ERROR_DATABASE_INSERTION: DetailMessage = {
    code: 'DEXA-ERR-5003',
    description: 'Error inserting in database',
  };

export class DetailMessage {
  code?: string;

  description?: string;
}

export default {
  // HTTP Error Codes
  HTTP_ERROR_CODE_BAD_REQUEST,
  HTTP_ERROR_CODE_SERVER_ERROR,
  HTTP_ERROR_CODE_FORBIDDEN,
  HTTP_ERROR_CODE_UNATHORIZED,
  HTTP_ERROR_CODE_METHOD_NOT_ALLOWED,
  HTTP_ERROR_CODE_NOT_FOUND,
  HTTP_ERROR_CODE_NOT_IMPLEMENTED,

  // Messages
  ERROR_EMPTY_DATA,
  ERROR_MISSING_REQUIRED_FIELDS,
  ERROR_DATABASE_INSERTION,
};
