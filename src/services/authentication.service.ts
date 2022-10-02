import { BaseService } from "./base.service";
import { AdminCreate, AdminUpdate, IResetPassword, ISignup } from '../services/interfaces/authentication.interface';



export class AuthenticationService extends BaseService {

    
    public async existingUser(email: string) {
        try {
           
        }
        catch (error) {
            throw error;
        }
    }

    public async signup(values: ISignup) {
        try {
           
        }
        catch (error) {
            throw error;
        }
    }


    public async login(values: ISignup) {
        try {
           
        }
        catch (error) {
            throw error;
        }
    }
    public async ssoLogin(email: string) {
        try {
           
        }
        catch (error) {
            throw error;
        }
    }

    public async forgotPassword(email: string, isExistingUser: any) {
        try {
        }
        catch (error) {
            throw error;
        }
    }

    public async resetPassword(values: IResetPassword, isExistingUser: any) {
        try {

        }
        catch (error) {
            throw error;
        }
    }
}