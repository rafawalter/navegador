require('shelljs/global');
var os = require('os');

if (os.platform().startsWith('win')) {
  exec('start-server.bat');
} else {
  exec('./start-server.sh');
}
