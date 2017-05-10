//This module will make sure that the required configuration is present.
//`npm config` settings will take precedence as that is how servers will be configured.
//`config.json` will be used for local development.

const localConfig = require('../config.json');

const npmConfig = {
    port: process.env.npm_package_config_port,
    server_name: process.env.npm_package_config_server_name,
    client_id: process.env.npm_package_config_client_id,
    client_secret: process.env.npm_package_config_client_secret
}

var keys = {};

for(var key in npmConfig){
    var pKey = "coop_" + key;
    if(npmConfig[key]){
        process.env[pKey] = npmConfig[key];
        keys[pKey] = npmConfig[key];
    } else if(localConfig[key] && localConfig != ''){
        process.env[pKey] = localConfig[key];
        keys[pKey] = localConfig[key];
    } else {
        throw Error('Missing ' + key + ' configuration.');
    }
}

module.exports = keys;