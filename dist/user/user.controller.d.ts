import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(req: any): Promise<import("./schemas/user.schema").UserDocument>;
    create(registerDto: RegisterDto): Promise<import("./schemas/user.schema").User>;
}
