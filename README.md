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


[AtScript]: http://atscript.org
[Traceur]: https://github.com/google/traceur-compiler
[RequireJS]: http://requirejs.org
[Assert]: https://github.com/angular/assert
[Karma]: http://karma-runner.github.io/
[Gulp]: http://gulpjs.com
