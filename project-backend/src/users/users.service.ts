import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { usersModel } from './users.model';
import { Model } from 'mongoose';

interface User{
    email:String,
    password:String,
}

@Injectable()
export class UsersService {
    constructor(
        @InjectModel("users") private usersModel: Model <usersModel>
    ){}
    async users(user:User){
        const newUser = new this.usersModel ({
            email: user.email,
            password: user.password
        })
        try {
            await newUser.save()
        }
        catch(error){
            console.log(error);
        }
    }
}
