
//object 有如下语法

//delegat 可以将一个对象的方法、属性等委托给另一个对象。
//koa的上下文对象ctx可以访问一些request和response上的方法、属性，原因在于，request或者response上的方法、属性被委托给了ctx对象



// 先获得delegate引用对象


const delegate = require('es6-delegate');
const proto = {


}

/***
 * response delegation
 * 
 * 
 *  */

 delegate(proto, 'response')
    .method('redirect')
    // ... 
    .access('body')
    // ... 

    //将上面的代码委托给response上的属性
    app.use(function(ctx, next){
        ctx.body = 'xxx'
        //ctx.redirect('/url')
    })