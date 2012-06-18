(function(){
function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
                handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
                loader(array.shift(),arguments.callee);
        }else{
                callback && callback();
        }
    })();
}
var jqueryjs= chrome.extension.getURL("jquery-1.7.2.min.js");
var userjs= chrome.extension.getURL("user.js");
loadScripts([
	jqueryjs,
    userjs
],function(){
    console.log('All things are loaded');
});
} )();