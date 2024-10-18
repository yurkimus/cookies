# Cookies

JavaScript-utilities to handle cookies everywhere.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [parse](#parse)
  - [read](#read)
  - [serialize](#serialize)
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

### read

#### Definition

```
read :: string -> string -> string
```

#### Example

```javascript
let cookie = 'name=John; age=30; role=admin'

let age = read('age', cookie) // => '30'

let [age, name] = ['age', 'name']
  .map(key => read(key))
  .map(reader => reader(cookie)) // => ['30', 'John']
```

### parse

#### Definition

```
parse :: string -> object
```

#### Example

```javascript
parse('name=John; age=30; role=admin') // => { name: 'John', age: '30', role: 'admin' }
```

### serialize

#### Definition

```
serialize :: string -> * -> [(string, string)] -> string
```

#### Example

```javascript
let attributes = [
  ['path', '/'],
  ['expires', 'Wed, 21 Oct 2026 07:28:00 GMT'],
]

serialize('name', 'John', attributes) // => 'name=John; path=/; expires=Wed, 21 Oct 2026 07:28:00 GMT'
```

## License

[MIT](LICENSE)
