const radian = require('./radian')


//https://en.wikipedia.org/wiki/Earth
const EARTH_MEAN_RADIUS = 6371

/**
 * Returns true if anotherPoint is in the circle which point is its center and distance is its radius
 * 
 * @param {object} point the center
 * @param {number} point.latitude the center latitude
 * @param {number} point.longitude the center longitude
 * @param {number} distance the radius in km
 * @param {object} anotherPoint the other point
 * @param {number} anotherPoint.latitude the other point's latitude
 * @param {number} anotherPoint.longitude the other point's longitude
 * @returns {boolean}
 */
function isInCircle(point, distance, anotherPoint) {
    const absLongDifference = Math.abs(radian(point.longitude) - radian(anotherPoint.longitude))

    const centralAngle = Math.acos(
        (Math.sin(radian(point.latitude)) * Math.sin(radian(anotherPoint.latitude)))
        +
        (Math.cos(radian(point.latitude)) * Math.cos(radian(anotherPoint.latitude)) * Math.cos(absLongDifference))
    )

    const pointToPointDistance = centralAngle * EARTH_MEAN_RADIUS

    return pointToPointDistance > distance ? false : true
}

module.exports = isInCircle
