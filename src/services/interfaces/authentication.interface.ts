export interface ISignup {
    name: string,
    code: string,
    email: string,
    password: string,
    confirmPassword?: string
}
export interface IResetPassword {
    email:string,
    verification_code:string,
    password: string,
    confirmPassword:string
}
export interface AdminCreate {
    email:string,
    name:string,
    role:string
}
export interface AdminUpdate {
    role:string,
    email:string
}