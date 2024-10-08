import { CanActivate, ExecutionContext } from '@nestjs/common';

// Basic authorization guard. Checks if our request has an 'admin: true' properti in a current user
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser) {
      return false;
    }

    return request.currentUser.admin;
  }
}
