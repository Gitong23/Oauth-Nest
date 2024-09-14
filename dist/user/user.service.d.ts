import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterDto } from './dto/register.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(registerDto: RegisterDto): Promise<User>;
    findByEmail(email: string): Promise<UserDocument>;
}
