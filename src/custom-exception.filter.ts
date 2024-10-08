import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.statusCode = exception.getStatus();

    const res = exception.getResponse() as { message: string[] };

    let message = exception.message;
    if (typeof res?.message === 'string') {
      message = res?.message;
    }

    if (Array.isArray(res?.message)) {
      message = res.message[0];
    }

    response
      .json({
        code: exception.getStatus(),
        message,
        data: null,
      })
      .end();
  }
}
