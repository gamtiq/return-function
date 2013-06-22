# return-function

Set of functions that simply return a value.
Can be used for stubs.


## Installation

### Node

    npm install return-function

### Component

Install component:

    npm install -g component

Then:

    component install gamtiq/return-function

## Usage

### Node, Component

    var ret = require("return-function");
    ...
    
### AMD

    define(["dist/return-function"], function(ret) {
        ...
    });

### Browser

    <script type="text/javascript" src="dist/return-function.js"></script>
    <script type="text/javascript">
        var ret = returnFunction;
        ...
    </script>

## Examples

    var global = ret.returnGlobal();   // window in browser
    var first = ret.returnFirstArg(1, 2, 3);   // 1
    var second = ret.returnSecondArg(1, 2, 3);   // 2
    var list = ret.returnArgList(1, 2, 3);   // [1, 2, 3]

## API

### .emptyFunction()

Empty function that does nothing and returns `undefined`.

### .returnUndefined()

Empty function that does nothing and returns `undefined`.

### .returnNull()

Return `null`.

### .returnTrue()

Return `true`.

### .returnFalse()

Return `false`.

### .returnEmptyStr()

Return empty string.

### .returnNaN()

Return `NaN`.

### .returnZero()

Return `0`.

### .returnOne()

Return `1`.

### .returnEmptyObject()

Return `{}`.

### .returnEmptyArray()

Return `[]`.

### .returnEmptyFunction()

Return `function () {}`.

### .returnDate()

Return `new Date()`.

### .returnThis()

Return `this`.

### .returnGlobal()

Return global object (`window` in browser).

### .returnFirstArg()

Return the first argument.

### .returnSecondArg()

Return the second argument.

### .returnArgList()

Return array of arguments.

