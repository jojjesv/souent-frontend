/**
 * Represents a single BMC card for an enterprise.
 * @author Johan Svensson
 */
export default class {
  public id: string;
  public title: string;
  public symbolImageUrl: string;
  public htmlContent: string;
  public lastEdit: Date;

  /**
   * Used for previewing the card.
   */
  public htmlPreviewContent: string;
}