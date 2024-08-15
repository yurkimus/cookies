# Cookies

JavaScript-utilities to handle cookies everywhere.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [parseCookie](#parseCookie)
  - [readCookie](#readCookie)
  - [serializeCookie](#serializeCookie)
- [License](#license)

## Installation

### npm

```
npm install @yurkimus/cookies
```

### urls

```
"@yurkimus/cookies": "npm:@yurkimus/cookies"
```

```
"@yurkimus/cookies": "github:yurkimus/cookies"
```

```
"@yurkimus/cookies": "https://raw.githubusercontent.com/yurkimus/cookies/main/source/index.js"
```

## Exports

### parseCookie

#### Definition

```
parseCookie :: string -> *
```

#### Example

```javascript
parseCookie('name=John; age=30; role=admin') // => [['name', 'John'], ['age', '30'], ['role', 'admin']]
```

### readCookie

#### Definition

```
readCookie :: * -> string -> *
```

#### Example

```javascript
let cookie = 'name=John; age=30; role=admin'

readCookie('age', cookie) // => '30'

readCookie(['age', 'name'], cookie) // => ['30', 'John']
```

### serializeCookie

#### Definition

```
serializeCookie :: string -> * -> [(string, string)] -> string
```

#### Example

```javascript
let attributes = [
  ['path', '/'],
  ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT'],
]

serializeCookie('name', 'John', attributes) // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
```

## License

[MIT](LICENSE)
