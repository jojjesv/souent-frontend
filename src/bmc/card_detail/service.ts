import { request } from "../../backend";

/**
 * Uploads a cover image file.
 * @returns {Promise<string>} The URL of the uploaded file.
 */
export async function uploadCoverImage(enterpriseId: string, cardId: string, file: File) {
  //  Wrap the file in formdata
  let formData = new FormData();
  formData.append('image', file)
  
  let { url } = await request(
    `enterprises/${enterpriseId}/bmc/${cardId}/cover`, 'put', formData
  )

  return url
}