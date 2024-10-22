import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDto } from './users.dto';

@Controller('users')
export class UsersController {

    constructor (
        private readonly usersService:UsersService 
    ){}

    @Post()
    users(@Body() usersDto:usersDto){
      return this.usersService.users(usersDto)
    }
}
