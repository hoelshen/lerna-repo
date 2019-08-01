var repl = require('repl');
msg = "message"
cool = 'sjh'
repl.start('> ').context.m = msg;
repl.start('< ').context.y = cool;


//缓存 机制

//热更新   动态require
function cleanCache(module){
  var path =  require.resolve(module);
  require.cache[path] = null;
  
}


