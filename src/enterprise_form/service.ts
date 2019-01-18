import { request } from "../backend";

/**
 * Requests to create a new enterprise using arbitrary form data.
 */
export async function submitEnterprise(formData: FormData) {
  let response = await request('/enterprises', 'post', formData);

  return {
    id: response.enterprise.id
  }
}