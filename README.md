# trimfandango

Advanced trimming of strings by providing lists of characters or full strings.

## Installation

Just run the following command:

```
npm install trimfandango
```

## Syntax

The basic syntax:

```js
Function trimFandango(String text, (Array|String charlist)): String
```

The `trimFandango()` function removes a set of characters from both ends of a string. By default it removes all whitespaces characters: `nul`-bytes, ordinary whitespaces, horizontal and vertical tabs, new lines and carriage returns. It returns the trimmed string.

* `0x00`, ASCII 00, `NUL`-byte
* `0x09`, ASCII 09, tab
* `0x0A`, ASCII 10, new line/line feed
* `0x0B`, ASCII 11, vertical tab
* `0x0D`, ASCII 13, carriage return
* `0x20`, ASCII 32, whitespace

## Description

Change the trimming behaviour by optionally providing a `charlist`. The `charlist` can be an `Array` or any other value. Be aware, that any other value than an array will be converted to a string.

### Array of characters

If you provide an array of single characters, all matched characters in any order will be removed from the beginning and the end of the string. You can either provide normal characters, unicode or specific regular expression tokens. In case of tokens take care that you double-backslash them, i.e. `\\s` instead of `\s`.

```js
console.log(
    trimFandango(
        '#55  ### #55 55§5   FOOBAR   # 55§&    ',
        ["\\s","#","&","5","§"]
    )
)
```

The output:

```js
FOOBAR
```

### String of characters

If you provide a string of characters - or any other value that converts to a string - the string and its possible subsets will removed from both ends of the `text`.

```js
console.log(
    trimFandango(
        '12FOOBAR23',
        123
    )
)
```
The output:

```js
FOOBAR
```

## Trivia

1. trimfandango is heavily inspired by the `trim()` function of PHP.
2. The name is a reminiscence to Grim Fandango, authored by the awesome [Tim Schafer](https://twitter.com/TimOfLegend).

## LICENSE

MIT License

Copyright (c) 2021 Mark Lubkowitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.