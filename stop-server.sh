# kill $(ps aux | grep '[n]ode ./node_modules/http-server/bin/http-server' | awk '{print $2}')
./node_modules/forever/bin/forever stop ./node_modules/http-server/bin/http-server
