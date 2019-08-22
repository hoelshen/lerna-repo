




var cache = {},
loadings = {},
queue = [],
scripts = doc.getElementsTagName('script'),
root = scripts[scripts.length-1].src,
baseUrl = root.slice(0, root.lastIndexOf('/') + 1);
function Module(path, deps, factory){
  this.id = path;
  uitls.addLoading(this.deps);
  cache[path] = this;
}



var utils = {
  addLoading(){
    for(var i = 0; i< deps.length; i++){
      var id = deps[i],
      stat = loadings[id];
      loadings[id] = sta ? stat : 0
    }
  },
  loadDeps(){
    for (var i = 0; i < deps.length; i++) {
      var m = deps[i];
      if (m.state < STATUS.LOADED) {
          m.load();
      }
  }

  },
  run(){
     queue.push(path);
     utils.addLoading([path]);
     utils.loadDeps();
  }
}


Module.prototype = {
  compile:function(){
    return this.factory(utils._r)
  }
}

const run = utils.run()
