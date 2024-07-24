# Cookie Utilities Library

A collection of utilities for handling cookies in JavaScript.

## parseCookie

Parses a cookie string into a list of key-value pairs.

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| cookie    | `string` | Cookie string |

**Returns**: `[string, string][]`

**Example**:

```javascript
parseCookie('name=John; age=30; role=admin') // => [['name', 'John'], ['age', '30'], ['role', 'admin']]
```

## readCookie

Reads cookies from a cookie string using a provided list of keys.

| Parameter | Type                   | Description                  |
| --------- | ---------------------- | ---------------------------- |
| keys      | `string` or `string[]` | List of keys or a single key |
| cookie    | `string`               | Cookie string                |

**Example**:

```javascript
let cookie = 'name=John; age=30; role=admin'

readCookie('age', cookie) // => '30'

readCookie(['age', 'name'], cookie) // => ['30', 'John']
```

## serializeCookie

Serializes a cookie from its components into a string.

| Parameter  | Type                 | Description                                              |
| ---------- | -------------------- | -------------------------------------------------------- |
| name       | `string`             | The name of the cookie                                   |
| value      | `string`             | The value of the cookie                                  |
| attributes | `[string, string][]` | An array containing additional attributes for the cookie |

**Example**:

```javascript
let attributes = [
  ['path', '/'],
  ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT'],
]

serializeCookie('name', 'John', attributes) // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
```
