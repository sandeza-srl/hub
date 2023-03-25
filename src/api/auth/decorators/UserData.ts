import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';


export const UserData = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  }
);
