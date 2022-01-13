import { getParallaxOffsets } from './getParallaxOffsets';

/**
 * Takes a parallax element and set the styles based on the
 * offsets and percent the element has moved though the viewport.
 * @param {object} element
 * @param {number} percentMoved
 */
export function setParallaxStyles(elInner, offsets, percentMoved, clamps) {
    // Get the parallax X and Y offsets
    const {
        x: { value: xv, unit: xu },
        y: { value: yv, unit: yu },
    } = getParallaxOffsets(offsets, percentMoved);

    const translateX = Math.min((clamps && clamps[0] || 0), xv)
    const translateY = Math.min((clamps && clamps[1] || 0), yv)

    // Apply styles
    elInner.style.transform = `translate3d(${translateX}${xu}, ${translateY}${yu}, 0)`;
}

/**
 * Takes a parallax element and removes parallax offset styles.
 * @param {object} element
 */
export function resetStyles(element) {
    const el = element.elInner;
    el.style.transform = '';
}
