
function Pdform(pdjson){
	
	var _self = this;
	
	_self.datajson = {
		dom : $("html"),
		is_postion: 0,//是否使用表单错误定位滑动
		beforecheck : function(){
       	},
		showError : function(thedom, msg) {
	       	console.log(msg);
	   	},
		postionError : function(thedom) {
			if(thedom.is(":hidden")){
			    var scroll_offset = thedom.parent().offset().top-300;
			}else{
			    var scroll_offset = thedom.offset().top-300;
			}
	        $("body,html").animate({ 
	            scrollTop : scroll_offset
	        }, 300);
	   	}
	   	
	};
	_self.setdata = function(pdjson){
		_self.datajson.dom = pdjson.dom || _self.datajson.dom;
		_self.datajson.is_postion  = pdjson.is_postion || _self.datajson.is_postion;
		_self.datajson.beforecheck = pdjson.beforecheck || _self.datajson.beforecheck;
		_self.datajson.showError = pdjson.showError || _self.datajson.showError;
		_self.datajson.postionError = pdjson.postionError || _self.datajson.postionError;
		
	};
	_self.setdata(pdjson);
	
	_self.checkout = function(){
		_self.datajson.beforecheck();
		var result = true;
		$("[pdtype]",_self.datajson.dom).each(function(){
			var self = $(this);
			
//			self.parent().click(function(){
//				$(this).find(".tip-wrong").html("");
//			})
			if(self.closest("[pdignore]").length == 0){
				var val = $.trim(self.val());
				if(val == $.trim(self.attr("placeholder"))){
					val = "";
				}
				var zt = true;
				switch(self.attr("pdtype")){
					case "*":
						if( val == "" ){
							zt = false;
						}
						break;
					case "limit"://文本字符限制，需添加pdlimit
						var val_limit = $.trim(self.attr("pdlimit"));
						var val_limit_arr = val_limit.split('-');
						if ( val.length < val_limit_arr[0] || val.length > val_limit_arr[1] ) {
							zt = false;
						}

						break;
					case "reg"://自定义正则验证
						var val_limit = $.trim(self.attr("pdlimit"));
						var _reg=new RegExp(val_limit);
						if ( !_reg.test(val) ) {
							zt = false;
						}

						break;
					case "image":
						if ( !$.testImage(val) ) {
							zt = false;
						}

						break;
					case "passport":
						if( !$.testPassport(val) ){
							zt = false;
						}
						break;
					case "idcard":
						if( !$.testIdcard(val) ){
							zt = false;
						}
						break;
					case "phone":
						if( !$.testPhone(val) ){
							zt = false;
						}
						break;
					case "mail":
						if( !$.testMail(val) ){
							zt = false;
						}
						break;
					case "mails":
						var mails=val.split(";");
						if(mails.length==1){
							if( !$.testMail(mails[0]) ){
								zt = false;
							}
						}else{
							
							for(var i=0;i<mails.length;i++){
								if(i==(mails.length-1)){
									if(mails[i]==""||$.testMail(mails[i])){
										continue;
									}
									if( !$.testMail(mails[i]) ){
										zt = false;
										break;
									}
								}
							}
						}
						break;
					case "num": 
						if( !$.testNum(val) ){
							zt = false;
						}
						break;
					case "integer": //正整数
						if( !$.testInteger(val) ){
							zt = false;
						}
						break;
					case "moreone-checkbox" :
						var val_limit = self.attr("pdlimit");
						val_limit=val_limit?$.trim(val_limit):false;
						var n = 0; 
						$("[type=checkbox]",self).each(function(){
							if($(this).is(":checked")){
								n++;
							}
						})
						if(n==0&&!val_limit){
							zt = false;
						}else if(val_limit){
							//验证选中个数
							var val_limit_arr = val_limit.split('-');
							if ( n < val_limit_arr[0] || n > val_limit_arr[1] ) {
								zt = false;
							}
						}
					 	break;
					case "moreone-radio" :
						var val_limit = self.attr("pdlimit");
						val_limit=val_limit?$.trim(val_limit):false;
						var n = 0; 
						$("[type=radio]", self).each(function(){
							if($(this).is(":checked")){
								n++;
							}
						})
						if(n==0&&!val_limit){
							zt = false;
						}else if(val_limit){
							//验证选中个数
							var val_limit_arr = val_limit.split('-');
							if ( n < val_limit_arr[0] || n > val_limit_arr[1] ) {
								zt = false;
							}
						}
					 	break;

					case "selectform" ://使用selectform插件的文本验证
						//处理值
						val = self.find(".xm-hide-input").val();
						if( val == "" ) {
							zt = false;
						}
						break;
				}
				if(!zt){
					_self.datajson.showError($(this),$(this).attr("pdmsg"))

					//定位到错误位置
					if (_self.datajson.is_postion == 1) {
						_self.datajson.postionError(self)
					}
					result = false;
					return false;
				}
			}
		})
		return result;
	};

}
