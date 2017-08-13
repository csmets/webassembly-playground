# WebAssembly Playground

Playing around and learning WebAssembly. Seeing what I can do with it as well
as seeing performance gains.

WebAssembly is required to be installed. Check out their
[Getting Started](http://webassembly.org/getting-started/developers-guide/)
for installation.

## Usage

First time setup will install libs needed.

	bash install.sh
	
To compile, you guessed it ;)

	bash compile.sh

Output will be placed in `dist`

## Playing with:

### JSON Files
Seeing if it's better to use C for reading large JSON files rather than JS.
What I've found out is that it's much faster to use JS. This might be because
the library used in C isn't fast enough or that it's bringing in the whole
library and having to run through that? Rather, JS has this natively built in.
I will investigate by using a different library to see if performance is gained.
Preferably something smaller would be better.

#### Verdict
So far I'll stick with native JS to handle my JSON files. It's faster and a lot
easier to work with.

### Recursion
Soon.

### Encoding
Soon.

More will be added, if I think of any.

## Footnotes

### Stack Overflow

WebAssembly's generated js has a default maximum stack which can cause a
stack overflow if you parse through a large file, like I try to do. I haven't
found a solution to increase the allowed memory, but a start can be look at:

```javascript
// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;
```

and also

```javascript
var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
```

I found that if I change these values I can increase the memory but I didn't
play with it appropriately so I didn't get concrete results, but it's a good
starting point to look at.
