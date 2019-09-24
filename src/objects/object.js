function clone(origin){
	let originProto = Object.getPrototypeOf(origin);
	return Object.assign(Object.create(originProto), origin);
}

var obj = {
  init(){
    console.log('this', this)
  }
}
obj.init.bind(window)
