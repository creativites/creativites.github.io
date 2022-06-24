function cal_rem() {
  var dev_width = document.documentElement.clientWidth || document.body.clientWidth;
  document.documentElement.style.fontSize = dev_width / 1920 * 100 + "px";
}
cal_rem();
window.addEventListener("resize", cal_rem, false);
//toastr配置
toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "2000",   
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
//load方法,callback非必传
function util_load(url, callback, data, type) {
  // 1页面只有一个弹框，2页面可以同时存在多个弹框
  var type = type ? type : "1";
  var callback = callback ? callback : function() {};
  var is_get = data == undefined ? "1" : "0";
  var data = data ? data : {};
  var has_layui = layui.layer == undefined ? 0 : 1;
  if (has_layui == 1) {
    var load_a = layui.layer.load(2);
  }
  if (type == "1") {
    $(".cbDivContent").remove();
  }
  $("body").append("<div id='' class='cbDivContent'></div>");

  function load_fun(response) {
    if (has_layui == 1) {
      layui.layer.close(load_a);
    }
    if (response.charAt(0) == '{') {
      // $("#cbDivContent").remove();
      var data = JSON.parse(response);
      //处理特定判断提示
      if (data.status == 0) {
        util_load_close();
        toastr.error(data.msg);
      } else {
        toastr.error("数据获取失败");
      }
      $(".cbDivContent:last").remove();
      return false;
    }
    callback(response);
    if ($(".cbDivContent").size() > 0) {
      $("html").css("overflow", "hidden")
    }
  }
  //使用get方式
  if (is_get == "1") {
    $(".cbDivContent:last").load(url, function(response, status, xhr) {
      load_fun(response)
    });
  } else {
    $(".cbDivContent:last").load(url, data, function(response, status, xhr) {
      load_fun(response)
    });
  }
}

function util_load_close(dom) {
  //	if($("#cbDivContent").length != 0){
  //		$("#cbDivContent").remove();
  //	} 
  var theTc = dom ? $(dom).parents(".cbDivContent") : $(".cbDivContent");
  theTc.remove();
  if ($(".cbDivContent").size() == 0) {
    $("html").css("overflow", "visible")
  }
}
//弹窗关闭
$(function() {
  $("body").on("click", ".cb-tc .tc-btn-no,.cb-tc .tc-close", function() {
    util_load_close($(this));
  })
})
