var Promise = require("bluebird");

function updateUser(){
  return new Promise((resolve, reject, onCancel)=>{
    let cancelled = false;

    //你需要更改Bluebird 的配置，才能使用cancellation 特性

    onCancel(()=>{
      cancelled = true;
      reject({reson: 'cancelled'});
    })

    return fetchData()
    .then(wrapWithCancel(updateUserData))
    .then(wrapWithCancel(updateUserAddress))
    .then(wrapWithCancel(updateMarketingData))
    .then(resolve)
    .catch(reject);

    return wrapWithCancel(fn){
      return (data) =>{
        if(!cancelled){
          return fn(data);
        }
      }
    }
  });
}