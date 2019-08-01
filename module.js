
const h5 = require('./hello')
// h5.eat('兰州拉面')
// h5.name('sjh');
console.log(h5)



Module._load = function(request, parent, isMain){
  if(parent){
    debug('request, parent.id', request, parent.id)
  }

  var filename = Module._resolveFilename(request,parent,isMain);

  var cachedModule=Module._cache[filename];

  if(cachedModule){
    updateChildren(parent,cachedModule, true);
    return cachedModule.exports;   //如果存在缓存，则返回cachedModule.exports对象
  }

  if(NativeModule.nonInternalExists(filename)){
    debug('load', request);
    return NativeModule.require(filename); //如果模块native模块，则调用NativeModule。requie（）
  }

  var module = new Module(filename,parent);

  if(isMain){
    process.mainModule = module;
    module.id = '.';
  }

  Module._cache[filename] = module;  //创建一个新模块，并将其保存到缓存中
  tryModuleLoad(module, filename);
  return module.exports

}


function tryModuleLoad(module, filename){
  var threw = true;
  try{
    module.load(filename);
    threw = false;
  }finally{
    if(threw){
      delete Module._cache(filename);
    }
  }
}


Module.prototype.load = function(filename){
  debug('load %j for module %j', filename,this.id);

  assert(!this.loaded);
  this.filename = filename;
  this.paths = Module._nodeModulePaths(path.dirname(filename));

  var extension = path.extname(filename) || '.js';

  if(Module._extensions[extension]) extension = '.js';
  Module._extensions[extension](this, filename);
  this.loaded = true;
}


















