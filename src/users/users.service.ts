import { Injectable } from '@nestjs/common';
import { promises } from 'dns';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Antoine',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'Batman',
        password: 'changeme',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.name === username);
  }
}
