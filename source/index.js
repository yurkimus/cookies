import { curry } from '@yurkimus/curry'
import { is } from '@yurkimus/types'

/**
 * Parses a cookie string into a list of key-value pairs.
 */
export let parse = source => {
  if (!is('String', source))
    throw new TypeError(`Parameter 'source' must be a string.`)

  return source
    .split('; ')
    .map(string => string.split('='))
    .reduce((object, [key, value]) => (object[key] = value, object), {})
}

/**
 * Reads cookies from a cookie string using a provided list of keys.
 */
export let read = curry((key, source) => {
  if (!is('String', source))
    throw new TypeError(`Parameter 'source' must be a string.`)

  return parse(source)[key]
})

/**
 * Serializes a cookie from its components into a string.
 *
 * @example
 * ```
 * let  name = 'name',
 *      value = 'John',
 *      attributes = [['path', '/'], ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT']],
 *      serialized = serialize(name, value, attributes); // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
 * ```
 */
export let serialize = curry((name, value, attributes) =>
  name
  + '='
  + value
  + attributes.reduce((string, attribute) => string + '; ' + attribute.join('='), '')
)
