import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/schemas/user.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private userService;
    private jwtService;
    private userModel;
    constructor(userService: UserService, jwtService: JwtService, userModel: Model<UserDocument>);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
    googleLogin(req: any): Promise<any>;
}
