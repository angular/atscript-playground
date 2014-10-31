## AtScript Playground

This is an empty repo to make it easy to experiment with [AtScript].


### Initial setup

```bash
# Clone the repo...
git clone https://github.com/vojtajina/atscript-playground.git
cd atscript-playground

# Then, you need to install all the dependencies...
npm install

# If you want to be able to use global commands `karma` and `gulp`...
npm install -g karma-cli gulp
```

### The minimal example

Our example consists of two files:

* `atscript-playground/src/something.ats` defines a simple class that returns the sum of two input values
* `atscript-playground/src/main.ats` imports that class and prints a message to the console
 
### Running the example in the browser
To run in the browser, you need to first build the project. This creates a `build/` directory that contains the transpiled `*.js` files that are created from your AtScript project.

```bash
gulp build
gulp serve

# If you want Gulp to re-build on every change...
gulp watch
```
Open a browser and look in the console log to see the result.

### Running the tests
The tests are in `atscript-playground/test/something_spec.ats`. Run them using Karma, like so:
```bash
karma start
```
Karma opens a browser window for running tests. To see the actual test output (and errors), look for the log in the terminal window where you issued the `karma start` command.

### What are all the pieces involved?

#### [Traceur]
Transpiles AtScript code into regular ES5 (today's JavaScript) so that it can be run in a current browser.

#### [RequireJS]
Traceur is configured to transpile AtScript modules into AMD syntax and we use RequireJS to load the code in the browser.

#### [Assert] library
When `typeAssertions: true` option is used, Traceur generates run-time type assertions such as `assert.type(x, Object)`. The assert library does the actual run-time check. Of course, you can use your own assert library.

The idea with type assertions is that you only use them during the development/testing and when deploying, you use `typeAssertions: false`.

#### [Karma]
Test runner that runs the tests in specified browsers, every time that you change a file.

#### [Gulp]
Task runner to make defining and running the tasks simpler.


[AtScript]: http://atscript.org
[Traceur]: https://github.com/google/traceur-compiler
[RequireJS]: http://requirejs.org
[Assert]: https://github.com/angular/assert
[Karma]: http://karma-runner.github.io/
[Gulp]: http://gulpjs.com
