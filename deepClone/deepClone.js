/**
 * Does deep cloning to given value
 * @param {number | string | undefined | null | array | object} value the source value
 * @returns {number | string | undefined | null | array | object} the clone
 */
function deepClone(value) {

    if (value && typeof value === 'object')
        return Array.isArray(value)
            ? value.map(deepClone)
            : Object.entries(value).reduce((acc, [key, value]) => ({ ...acc, [key]: deepClone(value) }), {})

    else return value
}

module.exports = deepClone
