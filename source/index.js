/**
 * Parses a cookie string into a list of key-value pairs.
 *
 * @param {*} source
 *
 * @returns {Record<string, string | undefined>}
 *
 * @throws {TypeError} When 'source' is not a 'string'
 */
export var parseCookies = source => {
  if (typeof source !== 'string')
    throw TypeError(`Parameter 'source' must be a 'string'.`)

  if (source === '')
    return {}
  else
    return source
      .split('; ')
      .map(string => string.split('='))
      .reduce((object, [key, value]) => (object[key] = value, object), {})
}

/**
 * Reads cookies from a cookie string using a provided list of keys.
 *
 * @param {string} name
 * @param {*} source
 *
 * @throws {TypeError} When 'source' is not a 'string'
 */
export var readCookie = (name, source) => {
  if (typeof source !== 'string')
    throw TypeError(`Parameter 'source' must be a 'string'.`)

  return parseCookies(source)[name]
}
