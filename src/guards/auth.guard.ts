import { CanActivate, ExecutionContext } from '@nestjs/common';

// Ensures that cookie has user id
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.session.userId;
  }
}
