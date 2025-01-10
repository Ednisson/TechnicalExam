export interface ErrorObject {
    code: string;
    message: string;
      response: {
        data: {
          statusCode: number;
          message: string;
          originalErrorMessage: string;
          errorCode: string;
        };
      };
    }
    