import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from './users.model';

@Module({
  imports:[
    MongooseModule.forFeature([
     {
      name : "users",
      schema : usersSchema
     }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
