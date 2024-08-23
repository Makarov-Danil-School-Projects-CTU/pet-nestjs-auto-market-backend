import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// A parameter decorator which returns an actual user
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
