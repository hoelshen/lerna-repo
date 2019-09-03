function Hello(name){
  function greeting(){
    console.log('hello' + 'name')

  }
  //public api

  return {
    greeting: greeting
  }
}

var me = Hello('kyle');
me.greeting();

//这种方式没见过

对于es6

var me = (function Hello(name){
  function greeting(){
    console.log('Hello' + 'name')
  }

  //public api
  return {
    greeting : greeting
  }

})('Kyle')

me.greeting();











