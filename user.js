	//加入过滤器标示并建立好对象
	var list_uin=$(".content p[node-type='feed_list_content'] em");
	//var user_name=list_uin.html();
	jQuery.each(list_uin,function(index, em){
						console.log(em);
				});

	//chrome.extension.sendRequest({url: user_name});
	