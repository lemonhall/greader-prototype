(function(){
	//加入过滤器标示并建立好对象
	var list_uin=$("#gbi4t");
	var user_name=list_uin.html();
	console.log(user_name);
	chrome.extension.sendRequest({url: user_name});

} )();