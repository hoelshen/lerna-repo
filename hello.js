function say(person){
  console.log('person', person)
}
function eat(food){
  console.log('food', food)
}


module.exports = 'Exports IT!'
exports.name = function(name){
  console.log('1', name);
}
exports.say = eat;
exports.eat = eat;