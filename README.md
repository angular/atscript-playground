## ES6++ playground

This is an empty repo to make it easy to experiment with [ES6]. It also includes some additional features, such as annotations and run-time type checks. It is basically the setup we use on Angular v2, so you can check out some of the v2 repos such as [di.js], [templating] or [diary.js].


### Initial setup

```bash
# Clone the repo...
git clone https://github.com/vojtajina/es6-playground.git
cd es6-playground

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g karma-cli
npm install -g gulp
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



[di.js]: https://github.com/angular/di.js
[templating]: https://github.com/angular/templating
[diary.js]: https://github.com/angular/diary.js

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

[Traceur]: https://github.com/google/traceur-compiler
[RequireJS]: http://requirejs.org
[Assert]: https://github.com/angular/assert
[Karma]: http://karma-runner.github.io/
[Gulp]: http://gulpjs.com
