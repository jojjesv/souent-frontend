import BMCCard from "../models/BMCCard";
import { request } from "../backend";

/**
 * A service for fetching and updating BMC card data.
 * @author Johan Svensson
 */
;

/**
 * Fetches all BMC cards for a specific enterprise.
 * @param enterpriseId The public ID of the enterprise whose cards to fetch.
 */
export async function fetchBMCCards(enterpriseId: string): Promise<BMCCard[]> {
  let result = await request(`/enterprise/${enterpriseId}/bmc`);

  if ("error" in result) {
    throw result.error;
  }

  return result.bmc;
}

/**
 * Updates an existing BMC card.
 * @param enterpriseId ID of enterprise which owns this card.
 * @param cardId ID of card to update.
 * @param update Update, as in the difference between the previous state and new state.
 */
export async function updateBMCCard(enterpriseId: string, cardId: string, update: any) {
  let result = await request(
    `enterprises/${enterpriseId}/bmc/${cardId}`, 'put', update
  );

  if ("error" in result) {
    if (result.error == "noUpdate") {
      //  It's ok
      return;
    }

    throw result.error;
  }

  return;
}