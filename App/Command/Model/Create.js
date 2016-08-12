var Command = TangoRequire('Modules/Cli/Command');
var action  = function(command)
{
	console.info(command);
}

console.log('\x1b[36m', 'sometext' ,'\x1b[0m');

var cmd = new Command('Model:create', 'Crea estructura de un nuevo modelo');
cmd.addArgument('model', 'Nombre del Modelo a crear');
cmd.addOption('t', 'Nombre de la tabla a relacionar')
cmd.setAction(action);


module.exports = cmd;