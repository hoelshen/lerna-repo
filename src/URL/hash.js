

    // 显示当前时间
    // setInterval(function(){
    //   window.location.hash = 'J'
    // }, 2000);
 
    // 监听onhashchange事件
    // window.addEventListener("hashchange", function(e) {
    //   console.log('e: ', e);
    //     // 获取hash值判断页面状态
    //     var flag = location.hash && location.hash.substring(1);
    //     console.log('flag: ', flag);

    // }, false);
 
      // 监听状态
  window.onpopstate = function(event) {
    console.log(event);
 
  }

