function scrollMove(e){autoScroll=!0;var n=e.offset().top,t=!0;clearInterval(commonTimer),t&&(t=!1,commonTimer=setInterval(function(){var e=$(document).scrollTop();e==n&&(clearInterval(commonTimer),t=!0);var i=(n-e)/2;i=i>0?Math.ceil(i):Math.floor(i),e+=i;$(document).stop(!1,!0).scrollTop(e)},100))}function move(e,n,t){$(e).stop(!1,!0);var i=$(e).prop("offsetLeft"),o=n-t>0?1:-1,s=$(e).children("li").eq(0).width();i==n&&$(e).css("left",t),i=$(e).prop("offsetLeft"),$(e).stop(!1,!0).animate({left:i+s*o},function(){i=$(e).prop("offsetLeft"),i==n&&$(e).css("left",t)})}function move2(e,n,t){$(e).stop(!1,!0);var i=$(e).prop("offsetLeft"),o=n-t>0?1:-1,s=$(e).children("ul").width();i==n&&$(e).css("left",t),i=$(e).prop("offsetLeft"),$(e).stop().animate({left:i+s*o},function(){i=$(e).prop("offsetLeft"),i==n&&$(e).css("left",t)})}function isInView(e){var n=e.getBoundingClientRect();return n.bottom>=450&&n.right>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)&&n.left<=(window.innerWidth||document.documentElement.clientWidth)}function getViewIndex(e){for(var n=0;n<e.length;n++)if(isInView(e[n]))return n+1;return-1}function timeBack(){var e=new Date,n=e.getTime(),t=document.querySelectorAll("time")[1].innerHTML;if("00:00"==t)var i=n+864e5;e=new Date(i);var o=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),l=o+"/"+s+"/"+r,a=document.querySelector(".time").querySelectorAll("em");t=l+" "+t;var c=new Date(t);t=c.getTime();var u=t-n,f=Math.floor(u/1e3),$=setInterval(function(){if(f<=0)return clearInterval($),!1;f--;var e=Math.floor(f/3600),n=Math.floor(f%3600/60),t=f%60;a[0].innerHTML=Math.floor(e/10),a[1].innerHTML=Math.floor(e%10),a[2].innerHTML=Math.floor(n/10),a[3].innerHTML=Math.floor(n%10),a[4].innerHTML=Math.floor(t/10),a[5].innerHTML=Math.floor(t%10)},1e3)}function leftTimer(e,n,t,i,o,s){var r,l,a,c,u,f,$;r=new Date(e,n-1,t,i,o,s),l=new Date,a=Math.floor((r-l)/1e3),setInterval(function(){a--,c=Math.floor(a/86400),c=c>10?c:"0"+c,u=Math.floor(a%24/3600),u=u>10?u:"0"+u,f=Math.floor(a%3600/60),f=f>10?f:"0"+f,$=a%60,$=$>10?$:"0"+$;for(var e=document.querySelectorAll(".lefttime"),n=0;n<e.length;n++)e[n].innerHTML=c+"天"+u+"小时"+f+"分"+$+"秒"},1e3)}$(function(){$(".gou_mask .closeWin").on("click",function(){$(this).parent().parent().css("display","none")}),$(".top_banner a > span").click(function(){$(this).parent().parent().parent().hide()}),$(".gou_shortcut_right > .fore").mouseenter(function(){$(this).addClass("onfore"),$(this).children("ul").stop().slideDown()}),$(".gou_shortcut_right > .fore").mouseleave(function(){$(this).children("ul").stop().slideUp(function(){$(this).parent().removeClass("onfore")})}),$(".gou_shortcut_right > .fore_third").mouseenter(function(){$(this).children(".erweima").stop().slideDown(),$(this).addClass("onfore_third")}),$(".gou_shortcut_right > .fore_third").mouseleave(function(){$(this).children(".erweima").stop().slideUp(function(){$(this).parent().removeClass("onfore_third")})});var e;$(".menu_box ul li").on("mouseenter",function(){$(this).addClass("nav_active").siblings().removeClass("nav_active"),$(this).children("i").css("width","49px"),e=$(this).index(),$(".details_box").eq(e).stop().show().siblings().hide(),$(".details_box").eq(e).css({left:"180px",opacity:"0.95"}).on("mouseenter",function(){$(".menu_box ul li").eq(e).addClass("nav_active").siblings().removeClass("nav_active"),$(".menu_box ul li").eq(e).children("i").css("width","49px"),$(this).stop().show()})}),$(".menu_box ul li").on("mouseleave",function(){$(this).removeClass("nav_active"),$(this).children("i").css("width","39px"),e=$(this).index(),$(".details_box").eq(e).stop().hide(),$(".details_box").eq(e).on("mouseleave",function(){$(this).stop().hide(),$(".menu_box ul li").eq(e).removeClass("nav_active"),$(".menu_box ul li").eq(e).children("i").css("width","39px")})}),timeBack();var n,t=$(".market_btn li").index(),i=setInterval(function(){t++,t%5==0&&(t=0),$(".market_btn li").eq(t).addClass("active_btn").siblings().removeClass("active_btn"),$("ul .market-silde").eq(t).css("display","block").siblings().css("display","none")},3e3);$(".market_btn li").on("mouseenter",function(){clearInterval(i),n=$(this).index(),$(this).addClass("active_btn").siblings().removeClass(),$("ul .market-silde").eq(n).css("display","block").siblings().css("display","none")}),$(".market_btn li").on("mouseleave",function(){i=setInterval(function(){n++,n%5==0&&(n=0),$(".market_btn li").eq(n).addClass("active_btn").siblings().removeClass("active_btn"),$("ul .market-silde").eq(n).css("display","block").siblings().css("display","none")},3e3)});var o;$(".timeTit ul li").on("click",function(){o=$(this).index(),$(this).addClass("current").siblings().removeClass("current");var e=$(".timeCon .ul");e.eq(o).addClass("selected").siblings().removeClass("selected")})}),$(function(){$(".brand .next").on("click",function(){var e=$(this).siblings(".br_b").find("ul")[0];move(e,-360,0)}),$(".brand .prev").on("click",function(){var e=$(this).siblings(".br_b").children("ul")[0];move(e,0,-360)});for(var e=$(".brand >.br_b > ul"),n=0;n<e.length;n++)!function(n){e[n].timer=setInterval(function(){move(e[n],-360,0)},2500)}(n);$(".br_b").on("mouseenter",function(){clearInterval($(this).find("ul").prop("timer"))}),$(".br_b").on("mouseleave",function(){var e=$(this);$(this).children("ul").prop("timer",setInterval(function(){move($(e).children("ul"),-360,0)},2500))}),$(".brand span").on("mouseenter",function(){clearInterval($(this).siblings(".br_b").children("ul").prop("timer"))}),$(".brand span").on("mouseleave",function(){var e=$(this);$(this).siblings(".br_b").children("ul").prop("timer",setInterval(function(){move($(e).siblings(".br_b").children("ul"),-360,0)},2500))})}),$(function(){$(".sunArea .conTit .next").on("click",function(){clearInterval(e),move2($(".sunArea .sunaCon"),-920,0)}),$(".sunArea .conTit .prev").on("click",function(){clearInterval(e),move2($(".sunArea .sunaCon"),0,-920)}),$(".article_bot .sunArea").on("mouseenter",function(){clearInterval(e)}),$(".article_bot .sunArea").on("mouseleave",function(){e=setInterval(function(){move2($(".sunArea .sunaCon"),-920,0)},2e3)});var e=setInterval(function(){move2($(".sunArea .sunaCon"),-920,0)},2e3)}),$(function(){var e=$(document).scrollTop();$(window).scrollTop(e+1);var n=$(".floor .article").eq(0).prop("offsetTop"),t=$("div.layer"),i=0;$(window).scroll(function(){var e=$(document).scrollTop();i=getViewIndex(t),i>0&&($(".mui-lift a").eq(i-1).children("div").addClass("ondiv").end().siblings().children("div").removeClass("ondiv"),$(".mui-lift a").eq(i-1).children("font").addClass("onfont").end().siblings().children("font").removeClass("onfont")),e>=8e3?$(".mui-lift").css({position:"absolute",top:"8200px"}):e>=n-98?$(".mui-lift").css({position:"fixed",top:"200px"}):$(".mui-lift").css({position:"absolute",top:"3700px"})}),$(".mui-lift div a").on("click",function(){var e=$(this).index();scrollMove($(".floor .layer").eq(e))})});var commonTimer=null;$(function(){}),$(function(){var e=0,n=$(".main_box ul").width(),t=$(".main_box ul").length;$(".guess .ge_prev, .ge_btn .prev").on("click",function(){0==e&&(e=t),e--,$(".ge_main .main_box").css("left",-n*e),$(".ge_btn .red").html(e+1)}),$(".guess .ge_next,.ge_btn .next").on("click",function(){e++,e==t&&(e=0),$(".ge_main .main_box").css("left",-n*e),$(".ge_btn .red").html(e+1)})}),$(function(){$(".cart_nav .cart-i").on("click",function(){var e=$(".gou_cart").css("right");"-280px"==e?$(".gou_cart").stop().animate({right:0}):$(".gou_cart").stop().animate({right:"-280px"})}),$(".cart_nav .bot li").on("mouseenter",function(){var e=$(this).attr("data-left");$(this).find(".aStair").stop().animate({left:e})}),$(".cart_nav .bot li").on("mouseleave",function(){$(this).find(".aStair").stop().animate({left:36})}),$(".cart_nav .bot .backTop").on("click",function(){var e=200;return $("body,html").stop().animate({scrollTop:0},e),!1})}),$(function(){$("img.lazy").lazyload({threshold:180,effect:"fadeIn"})}),leftTimer(2017,1,1,24,0,0);