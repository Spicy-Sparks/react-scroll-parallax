import { getParallaxOffsets } from './getParallaxOffsets';

/**
 * Takes a parallax element and set the styles based on the
 * offsets and percent the element has moved though the viewport.
 * @param {object} element
 * @param {number} percentMoved
 */
export function setParallaxStyles(elInner, offsets, percentMoved, clamps, initialOffsets) {
    // Get the parallax X and Y offsets
    const {
        x: { value: xv, unit: xu },
        y: { value: yv, unit: yu },
    } = getParallaxOffsets(offsets, percentMoved);

    let translateX = (typeof (clamps && clamps[0]) === "number") ? Math.min(clamps[0], xv) : xv
    let translateY = (typeof (clamps && clamps[1]) === "number") ? Math.min(clamps[1], yv) : yv

    if((typeof (initialOffsets && initialOffsets[0]) === "number"))
      translateX += initialOffsets[0]

    if((typeof (initialOffsets && initialOffsets[1]) === "number"))
      translateY += initialOffsets[1]

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
