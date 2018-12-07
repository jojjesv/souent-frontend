import { request } from "../../backend";

export async function authWithAccessToken(accessToken: string) {
    request('/user/auth', 'post', {accessToken})
}