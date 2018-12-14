import { request } from "../backend";

/**
 * Requests to create a new enterprise using arbitrary form data.
 */
export async function submitEnterprise(formData: FormData) {
  let objPayload: any = {
    additionalMembers: []
  };

  formData.forEach((v, k) => console.log("[form data] " + k + " = " + v));

  let memberEmail: string;
  //  Skip the first member email (is me)
  for (let i = 1; !!(memberEmail = formData.get("member" + i) as string); i++) {
    objPayload.additionalMembers.push(memberEmail);
  }

  objPayload.name = formData.get("name") as string;
  objPayload.businessIdea = formData.get("business-idea") as string;

  debugger;

  let response = await request('/enterprises', 'post', objPayload);
}