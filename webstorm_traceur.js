var inputFilename = process.argv[2];
var outputFilename = process.argv[3] || inputFilename.replace(/\.ats$/, '.js');

var TraceurNodeCompiler = require('traceur/src/node/NodeCompiler').NodeCompiler;
var options = require('./config.json').traceur;
var compiler = new TraceurNodeCompiler(options, '../../');


// TODO(vojta): fix this in Traceur instead
// Traceur generates source map file in the CWD.
// This hacks Traceur to generate source map file in the output file directory.
var writeFile = require('traceur/src/node/file-util').writeFile;
compiler.writeTreeToFile = function(tree, filename) {
  filename = this.normalize(filename);
  var compiledCode = this.write(tree, filename, this.sourceRoot_);
  if (this.options_.sourceMaps === 'file') {
    var sourcemap = this.getSourceMap();
    if (sourcemap) {
      // This is the changed line
      writeFile(filename.replace(/\.js$/, '.map'), sourcemap);
    }
  }

  writeFile(filename, compiledCode);
};


compiler.compileSingleFile(inputFilename, outputFilename, function(err) {
  console.error(err);
});
