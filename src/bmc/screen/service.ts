import BMCCard from "../../models/BMCCard";

/**
 * Fetches the BMC for a specific enterprise by public enterprise ID.
 */
export async function fetchBmc(publicEnterpriseId: string): Promise<BMCCard[]> {
  return [{
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'test',
    symbolImageUrl: 'test.jpg'
  }]
}