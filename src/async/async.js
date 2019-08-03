function tell(){
  return new Promise((reslove, reject)=>{
    if(true){
      reslove(1)
    } else{
      reject(2)
    }
  })
}

var a = (
  async() =>{
    await tell().then((res)=>{
      console.log('res',res);
    }).catch(err=>{
      console.log('err: ', err);
    })
  }
) 
console.log('a',a())

