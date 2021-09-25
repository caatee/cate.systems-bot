module.exports = { shutdown, time, uptime, help, cls, fourtwenty }

function shutdown() {
    setTimeout(() => {process.exit(0)}, 250);
    console.log('Shutdown manually triggered via CLI.')

}
function time() {

    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(`[DATE] ${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} @ ${d.getHours()}:${d.getMinutes()}`)

}
function uptime() {

    function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(hours) + ' hours, ' + pad(minutes) + ' minutes, and ' + pad(seconds) + ' seconds.';
      }
      
      var uptime = process.uptime();

      console.log(format(uptime));

}
function help() {

    console.log("[COMMANDS] ", module.exports)

}
function cls() {

console.clear();

}
function fourtwenty() {

    const colors = require('colors')
    console.clear()
console.log(colors.green(`                     .                          \n                     M                          \n                    dM                          \n                    MMr                         \n                   4MMML                  .     \n                   MMMMM.                xf     \n   .              "MMMMM               .MM-     \n    Mh..          +MMMMMM            .MMMM      \n    .MMM.         .MMMMML.          MMMMMh      \n     )MMMh.        MMMMMM         MMMMMMM       \n      3MMMMx.     'MMMMMMf      xnMMMMMM"       \n      '*MMMMM      MMMMMM.     nMMMMMMP"        \n        *MMMMMx    "MMMMM\    .MMMMMMM=         \n         *MMMMMh   "MMMMM"   JMMMMMMP           \n           MMMMMM   3MMMM.  dMMMMMM            .\n            MMMMMM  "MMMM  .MMMMM(        .nnMP"\n=..          *MMMMx  MMM"  dMMMM"    .nnMMMMM*  \n  "MMn...     'MMMMr 'MM   MMM"   .nMMMMMMM*"   \n   "4MMMMnn..   *MMM  MM  MMP"  .dMMMMMMM""     \n     ^MMMMMMMMx.  *ML "M .M*  .MMMMMM**"        \n        *PMMMMMMhn. *x > M  .MMMM**""           \n           ""**MMMMhx/.h/ .=*"                  \n                    .3P"%....                   \n                  nP"     "*MMnx                `))
}

