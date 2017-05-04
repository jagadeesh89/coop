var cache = {};

module.exports = {
    set: set,
    get: get
};

function set(key,value){
    cache[key] = value;
};

function get(key){
    return cache[key];
}