/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
 
(function(){
	//加入过滤器标示并建立好对象	
	var icp=$("#icp");
	icp.after("<iframe height=600 width=600 id='qso' src='http://weibo.com/lemonhall'>");

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     console.log("用户的QQ信息:", request.url);
//     sendResponse({});
// });

} )();