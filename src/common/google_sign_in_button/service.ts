import { request } from "../../backend";
import * as Cookie from 'js-cookie';

/**
 * Fetches an auth token using a Google access token.
 */
export async function fetchAuthToken(accessToken: string): Promise<string> {
  let result = await request('/user/auth', 'post', {
    accessToken
  }) || {};

  if ("error" in result) {
    throw new Error(result.error);
  }

  let { authToken } = result;

  useAuthToken(authToken);

  return authToken;
}

export function useAuthToken(authToken: string) {
  Cookie.set('auth_token', authToken);
}