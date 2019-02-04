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

/**
 * Injects <a> tags where URLs are present.
 */
export function injectAnchorTags(original: string){
  return original.replace(
    /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/ig,
    '<a href="$1">$1</a>'
  )
}