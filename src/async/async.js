// function tell(){
//   return new Promise((reslove, reject)=>{
//     if(true){
//       reslove(1)
//     } else{
//       reject(2)
//     }
//   })
// }

// var a = (
//   async() =>{
//     await tell().then((res)=>{
//       console.log('res',res);
//     }).catch(err=>{
//       console.log('err: ', err);
//     })
//   }
// ) 
// console.log('a',a())


// async function async1(){
//   const js =  await async2();
//   console.log(1)
// }


// function async2(){
//   console.log('async2')
// }

// async1();

async function doThing() {
  await doA()
  await doB()
}

function doAnotherThing() {
  console.log('do another thing')
}

async function doA() {
  return new Promise(resove => {
    setTimeout(() => {
      console.log('done A')
      resove()
    }, 0)
  })
}

async function doB() {
  return new Promise(resove => {
    setTimeout(() => {
      console.log('done B')
      resove()
    }, 0)
  })
}

doThing().then(console.log('done Thing'))
doAnotherThing()