import { LoginModel } from "./login.model";

export interface Authresponse {
    token: string;
    user: LoginModel;
}
