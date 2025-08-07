import { AuthService } from './auth.service';
import { AuthDto, LogDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: AuthDto): Promise<{
        access_token: string;
        user: any;
    }>;
    signIn(dto: LogDto): Promise<{
        access_token: string;
        user: any;
    }>;
}
