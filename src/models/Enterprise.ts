import BMCCard from "./BMCCard";

/**
 * Represents a single enterprise with a BMC.
 * @author Johan Svensson
 */
export default class {
  id: string;
  name: string;
  logoUrl: string;
  businessIdea: string;
  cards: BMCCard[];
}