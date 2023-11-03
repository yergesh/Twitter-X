import http from "@/services/http-common";
import { CurrentUser, LoginModel, RegistrationModel } from "@/types/RegistrationModel";
import {Group} from "@/types/Group";

export async function addUser(user: RegistrationModel) {
    await http.post("users", user);
}

export async function loginAsync(loginModel: LoginModel): Promise<CurrentUser> {
    return (await http.post<CurrentUser>("auth/login", loginModel)).data;
}

export async function getUsersAsync(): Promise<Array<RegistrationModel>> {
    return (await http.get<Array<RegistrationModel>>("users/all")).data
}
