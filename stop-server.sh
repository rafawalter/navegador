kill $(ps aux | grep '[n]ode ./node_modules/http-server/bin/http-server' | awk '{print $2}')
