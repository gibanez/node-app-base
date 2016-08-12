require('./Tango/setup');

var Cli = TangoRequire('Core/Cli');

var cmd = new Cli(process.argv);

cmd.execute();

process.argv.forEach(function (val, index, array) {
  //console.log(index + ': ' + val);
});