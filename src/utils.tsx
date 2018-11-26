/**
 * Some utilities.
 * @author Johan Svensson
 */

/**
 * Returns a value clamped between a minimum and maximum value.
 */
export function clamp(min: number, max: number, val: number) {
  return Math.min(max, Math.min(min, val));
}