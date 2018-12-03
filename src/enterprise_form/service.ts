import { request } from "../backend";

/**
 * Requests to create a new enterprise using arbitrary form data.
 */
export async function submitEnterprise(formData: FormData) {
  let objPayload: any = {
    members: []
  };

  let memberEmail: string;
  for (let i = 0; !!(memberEmail = formData.get("member" + i) as string); i++) {
    objPayload.members.push(memberEmail);
  }

  objPayload.name = formData.get("name") as string;
  objPayload.businessIdea = formData.get("business-idea") as string;

  debugger;

  let response = await request('/enterprises', 'post', objPayload);
}