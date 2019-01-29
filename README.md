# Cache Driver
## About
Inspired by the PHP package Onoi Cache, this package aims to help make other packages less dependent on specific caching packages. 

## Installation
```
npm install cache-driver --save
```

## Usage (Packages)
*This section is if you're adding this driver to your package. It also assumes you're using TypeScript.*

```js
import { Cache } from "cache-driver"

export class MyAwesomeClass {
    private cache: Cache|null = null;

    constructor(cache?: Cache) {
        if (cache) {
            this.cache = cache;
        }
    }

    public someMethod() {
        if (this.cache !== null) {
            this.cache.save("sessionId", "somerandomstring", 2);
        }
    }
}
```

## Usage (Product) *Untested*
*This is assuming you're using `MyAwesomeClass` from above as well as TypeScript.*
*This also assumes you're using the `cache` package.*

### Install `cache`
```
npm install cache --save
```

```js
import { CacheAdapter } from "cache-driver/adapaters/CacheAdapters"

let awesome = new MyAwesomeClass(new CacheAdapater());
```