import { request } from "../../backend";
import * as Cookie from 'js-cookie';

export async function authWithAccessToken(accessToken: string) {
  let response: any = await request('/user/auth', 'post', { accessToken }) as any;

  let authToken: string = response.authToken;
  useAuthToken(authToken);

  return {
    authToken
  }
}

/**
 * Registers an access token so that it will be used in the next backend requests.
 */
function useAuthToken(authToken: string) {
  Cookie.set("auth_token", authToken);
}