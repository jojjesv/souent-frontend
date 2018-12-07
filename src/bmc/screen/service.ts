import BMCCard from "../../models/BMCCard";

/**
 * Fetches the BMC for a specific enterprise by public enterprise ID.
 */
export async function fetchBmc(publicEnterpriseId: string): Promise<BMCCard[]> {
  return [{
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Key Partners',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Key Activities',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Key Resources',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Value Propositions',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Customer Relationships',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Channels',
    symbolImageUrl: 'test.jpg'
  }, {
    htmlContent: `<p>Hello</p>`,
    htmlPreviewContent: `<p>Hello</p>`,
    title: 'Customer Segments',
    symbolImageUrl: 'test.jpg'
  }]
}