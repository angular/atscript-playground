## AtScript Playground

This is an empty repo to make it easy to experiment with [AtScript].


### Initial setup

```bash
# Clone the repo...
git clone https://github.com/vojtajina/atscript-playground.git
cd atscript-playground

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g karma-cli gulp
```


### Running the tests
```bash
karma start
```


### Running in the browser
```bash
gulp build
gulp serve

# If you wanna Gulp to re-build on every change...
gulp watch
```

### What are all the pieces involved?

#### [Traceur]
Transpiles ES6 code into regular ES5 (today's JavaScript) so that it can be run in a today browser.

#### [RequireJS]
Traceur is configured to transpile ES6 modules into AMD syntax and we use RequireJS to load the code in the browser.

#### [Assert] library
When `typeAssertions: true` option is used, Traceur generates run-time type assertions such as `assert.type(x, Object)`. The assert library does the actual run-time check. Of course, you can use your own assert library.

The idea with type assertions is that you only use them during the development/testing and when deploying, you use `typeAssertions: false`.

#### [Karma]
Test runner that runs the tests in specified browsers, everytime you change a file.

#### [Gulp]
Task runner to make defining and running the tasks simpler.



### WTF is ES6?
Simply, the next version of JavaScript that contains some really cool features. You might check out some of these:

- https://wiki.mozilla.org/ES6_plans
- http://globaldev.co.uk/2013/09/es6-part-1/
- http://code.tutsplus.com/tutorials/eight-cool-features-coming-in-es6--net-33175



### And what the hell is the ++?
When developing Angular v2, we are using some additional features that are not in the ES6 specs...

#### 1/ meta data annotations
```js
class SomeAnnotation {}
class AnotherAnnotation {}

@SomeAnnotation
class Foo {
  constructor(@AnotherAnnotation bar) {}
}
```
This is a very similar syntax to annotations in Java/Dart. It is just a nice declarative way to put additional meta data on classes/functions/parameters.

When `annotations: true`, Traceur transpiles the above code code into something like this:
```js
// ...

Foo.annotations = [new SomeAnnotation];
Foo.parameters = [[new AnotherAnnotation]];
```

Therefore you can easily achieve the same thing without transpiling the code. It just won't be as pretty ;-)

#### 2/ type annotations
```js
function request(url: String, data: Object, callback: Function) {
  // ...
}
```

The syntax is more-less the same as [TypeScript].

When `types: true, annotations: true`, Traceur transpiles this code into something like this:
```js
function request(url, data, callback) {
  // ...
}

// this code might change
request.parameters = [[String], [Object], [Function]];
```

When also `typeAssertions: true`, Traceur generates run-time assertions, such as:
```js
function request(url, data, callback) {
  assert.argumentTypes(
    url, String,
    data, Object,
    callback, Function
  );
}
```


[di.js]: https://github.com/angular/di.js
[templating]: https://github.com/angular/templating
[diary.js]: https://github.com/angular/diary.js

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

[Traceur]: https://github.com/google/traceur-compiler
[RequireJS]: http://requirejs.org
[Assert]: https://github.com/angular/assert
[Karma]: http://karma-runner.github.io/
[Gulp]: http://gulpjs.com
[TypeScript]: escriptlang.org
