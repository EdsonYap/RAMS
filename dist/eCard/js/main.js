/**
* …
* @author CK_Wong
*/
var stageWidth,stageHeight,g_scrollNum,g_scrollMaxNum;function init(){responsive_winResizeFunc();stageWidth=$("#gameCanvas").width();stageHeight=$("#gameCanvas").height();canvas_init("gameCanvas",stageWidth,stageHeight);var d=winW/stageWidth;var b=Math.floor($("#gameCanvas").height()*d);var a=b-$(window).height();var c=winH/8;g_scrollNum=a;g_scrollMaxNum=a;trace("tempScroll");TweenMax.to($("html, body"),2,{scrollTop:c,ease:Cubic.easeOut})}function scrollFunc(){trace($(document).scrollTop())}$(document).ready(init);