import { is, isLike } from '@yurkimus/types'

/**
 * Parses a cookie string into a list of key-value pairs.
 *
 * @param {string} cookie
 *
 * @returns {[string, string][]}
 *
 * @example
 * ```
 * let  cookie = 'name=John; age=30; role=admin',
 *      parsed = parseCookie(cookieString); // => [string, string][]
 * ```
 */
export var parseCookie = (cookie) => {
  if (!is('String', cookie)) {
    throw new TypeError('"cookie" must be a string!')
  }

  return cookie.split('; ').map((string) => string.split('='))
}

/**
 * Reads cookies from a cookie string using a provided list of keys.
 *
 * @param {string | string[]} keys
 * @param {string} cookie
 *
 * @returns {string | string[]}
 *
 * @example
 * ```
 * let  cookie = 'name=John; age=30; role=admin',
 *      cookies1 = readCookie('age', cookie); // => '30'
 *      cookies2 = readCookie(['age', 'name'], cookie); // => ['30', 'John']
 * ```
 */
export var readCookie = (keys, cookie) => {
  if (!is('String', cookie)) {
    throw new TypeError('"cookie" must be a String!')
  }

  var cookies = Object.fromEntries(parseCookie(cookie))

  if (isLike('Array')) {
    return Array.prototype.map.call(keys, (key) => cookies[key])
  }

  return cookies[keys]
}

/**
 * Serializes a cookie from its components into a string.
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {[string, string][]} attributes An array containing additional attributes for the cookie.
 *
 * @example
 * ```
 * let  name = 'name',
 *      value = 'John',
 *      attributes = [['path', '/'], ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT']],
 *      serialized = serializeCookie(name, value, attributes); // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
 * ```
 */
export var serializeCookie = (name, value, attributes) =>
  name +
  '=' +
  value +
  attributes.reduce(
    (string, attribute) => string + '; ' + attribute.join('='),
    '',
  )
