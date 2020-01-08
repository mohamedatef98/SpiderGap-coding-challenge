/**
 * Converts Angle from degrees to radians
 * @param {number} degrees the angle in degrees
 * @returns {number} the angle in radians
 */
function radian(degrees) {
    return (degrees < 0 ? degrees + 360 : degrees) * Math.PI / 180
}
module.exports = radian