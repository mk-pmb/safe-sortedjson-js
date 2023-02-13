
<!--#echo json="package.json" key="name" underline="=" -->
safe-sortedjson
===============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
sortedjson, guarded against recursion and some unicode confusion.
<!--/#echo -->



API
---

This module exports one function:

### safeSortedJsonify(data[, opts])

`opts` is an optional options object that supports these keys:

* All the options from
  [deepsortobj](https://www.npmjs.com/package/deepsortobj).
  * However, if `circular` is false-y (e.g. missing),
    it will default to a function that always returns the string
    `'[Circular]'`.
* `replacer`, `space`: As described in
  [sortedjson](https://www.npmjs.com/package/sortedjson).
* `undef`: What to return if `(data === undefined)`. Default: `undefined`



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
