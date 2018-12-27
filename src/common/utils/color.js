/**
 * @typedef ColorRgb
 * @property {number} r
 * @property {number} g
 * @property {number} b
 */

/**
 * Move a 0-255 ranged RGB to 0-1
 * @param {ColorRgb} color
 * @returns {ColorRgb}
 */
export function normalize(color) {
  return {
    r: color.r / 255,
    g: color.g / 255,
    b: color.b / 255
  };
}

/**
 * Luminance based on the HSP color model
 * @see http://alienryderflex.com/hsp.html
 * @param {ColorRgb} color
 * @returns {number}
 */
export function luminance(color) {
  const { r, g, b } = normalize(color);
  return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
}

/**
 * Contrast Ratio for two colors
 * @see https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 * @param {ColorRgb} a
 * @param {ColorRgb} b
 * @returns {number}
 */
export function contrastRatio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);

  return la > lb ? (la + 0.05) / (lb + 0.05) : (lb + 0.05) / (la + 0.05);
}
