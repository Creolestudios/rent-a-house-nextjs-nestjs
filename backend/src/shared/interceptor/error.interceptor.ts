import {
  ArgumentsHost,
  Catch,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { GraphQLError } from 'graphql';
import { GqlInternalServerErrorException } from '../../common/error';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(GraphQLError)
export class GraphQLExceptionFilter implements GqlExceptionFilter {
  catch(exception: GraphQLError, host: ArgumentsHost) {
    if (exception.extensions.code === 'INTERNAL_SERVER_ERROR') {
      console.log('error ->', exception);
      return GqlInternalServerErrorException();
    }
    return exception;
  }
}

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap({
        // next: (data) => {},
        error: (error) => {
          error.message;
        },
      }),
    );
  }
}
