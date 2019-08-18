window.onload=function(){
  // const obj = {};
  // Object.defineProperty(obj, 'text',{
  //   configurable:true,
  //   enumerable: true,
  //   get(){
  //     console.log('获取值 +')
  //   },
  //   set(newVal){
  //     console.log('newVal: ', newVal);
  //     const  p = document.getElementById('p');
  //     console.log('p: ', p);
  //     const text = document.getElementById('input')
  //     console.log('text: ', text.value);
  //     text.value = newVal;
  //     p.innerHTML = newVal;
  //   }
  // })
  const obj ={};
  const  p = document.getElementById('p');
  const text = document.getElementById('input')
  const newObj = new Proxy(obj, {
    get(target, prop){
      return Reflect.get(target, prop, value);
    },
    set(target, prop,value){
      if(prop === 'text'){
        text.value = value;
        p.innerHTML = value;
      }
      return Reflect.set(target, prop, value );
    }
  })


  const input = document.getElementById('input')
  input.addEventListener('keyup',function(e){
    newObj.text = e.target.value
    // console.log('keye: ', e.target.value);
  })
}

