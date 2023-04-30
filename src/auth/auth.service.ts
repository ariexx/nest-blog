import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      message: 'This is a mock message',
    };
  }

  signup() {
    return { message: 'This is a mock message' };
  }
}
