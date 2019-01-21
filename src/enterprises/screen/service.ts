import { request } from "../../backend";
import Enterprise from "../../models/Enterprise";

/**
 * Fetches all enterprises.
 */
export async function fetchEnterprises(): Promise<Enterprise[]> {
  let result = await request("/enterprises", "get");

  if ("error" in result) {
    throw result.error;
  }

  return (result.enterprises as any[]).map(data => {
    let enterprise: Enterprise = {
      id: data.id,
      name: data.name,
      businessIdea: data.description,
      cards: null
    };

    return enterprise;
  });
}