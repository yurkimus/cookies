import { curry } from '@yurkimus/curry'
import { is } from '@yurkimus/types'

/**
 * Parses a cookie string into a list of key-value pairs.
 */
export var parse = value => {
  if (!is('String', value))
    throw new TypeError(`Parameter 'value' must be a string.`)

  return value
    .split('; ')
    .map(string => string.split('='))
    .reduce((object, [key, value]) => (object[key] = value, object), {})
}

/**
 * Reads cookies from a cookie string using a provided list of keys.
 */
export var read = curry(
  (key, value) => {
    if (!is('String', value))
      throw new TypeError(`Parameter 'value' must be a string.`)

    return parse(value)[key]
  },
)

/**
 * Serializes a cookie from its components into a string.
 *
 * @example
 * ```
 * let  name = 'name',
 *      value = 'John',
 *      attributes = [['path', '/'], ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT']],
 *      serialized = serializeCookie(name, value, attributes); // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
 * ```
 */
export var serialize = curry(
  (name, value, attributes) =>
    name
    + '='
    + value
    + attributes.reduce((string, attribute) => string + '; ' + attribute.join('='), ''),
)
