function get1(){
  return 1
}
function get2(){
  return 2

}
function get3(){
  return 3

}
function get4(){
  return 4

}


(async function async(){
  try{
  } catch(err){
    console.log('err: ', err);
  }
  const g1 =  get1();
  const g2 =  get2();
  const g3 =  get3();
  const g4 =  get4();
  let sum  =0;
  let data = await Promise.all([g1,g2,g3,g4])
  for(v of data){
    sum = sum+v;
  }
  console.log(sum)
})()