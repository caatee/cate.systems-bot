function Load(name, permissions) {
    
    //import stuff
    const readline = require('readline');
    const colors = require('colors');
    const cmds = require('../CommandLine/cmds')
    const commands = ['shutdown', 'time', 'uptime', 'help', 'exit', 'cls', 'fourtwenty']
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

    rl.question(colors.brightGreen(name + '@cate.systems') + colors.brightBlue(' ~ $ ') , (answer) => {
        let selectedFunction = answer.toLowerCase()

        if ( commands.includes(selectedFunction) ) {1
            console.log(colors.green('[RECEIVED] ') + `Attempting function '${answer}'`)

            rl.close();
        }
        else
        {

            console.log(colors.red('[ERR] ') + `Cannot find command '${answer}'` )
            rl.close();
            return Load(name);

        }

        if( selectedFunction === 'exit') {

            console.log('Closing CLI...')

            return rl.close();

        }

        eval('cmds.' + selectedFunction + '()')
        
        Load(name);
        
      });

}

module.exports = { Load };