
var qsData = {
  'word': 'shj'
};
$.ajax({
  async: false,
  url: "http://127.0.0.1:3000",  //跨域的dns
  type: "GET",
  dataType: 'jsonp',
  jsonp: 'callback',
  data: qsData,
  timeout: 5000,
  success: function (json) {
    console.log('json: ', json);
    alert(json.x)
    // let obj = JSON.parse(json);
    // console.log('obj: ',obj );
  },
  error: function (xhr) {
    console.log('xhr: ', xhr);
    //请求出错处理 
    alert("请求出错)",xhr);
  }
});