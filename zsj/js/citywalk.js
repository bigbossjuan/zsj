//头部的广告删除事件
$("#toper img").click(function(){
	$("#toper").css("display","none")
})
//箭头的划过事件
$(".jt2").hover(function(){
	animatFn($(this));
	$(".left>ul .jt2 .jtl").css("color","#10b041")
},function(){
	animatFn($(this));
	$(".left>ul .jt2 .jtl").css("color","#C0C0C0")
});
$(".jt3").hover(function(){
	animatFn($(this));
	$(".left>ul .jt3 .jtl").css("color","#10b041")
},function(){
	animatFn($(this));
	$(".left>ul .jt3 .jtl").css("color","#C0C0C0")
});
function animatFn(a){
	a.find($("ul")).stop(true,true);
	$("#tangle").stop(true,true);
	$("#tangle1").stop(true,true);
	var value1 = a.find($("a")).find($(".jt")).attr("src") == "../images/index/sm4(5).jpg"?"../images/index/jt.jpg":"../images/index/sm4(5).jpg";
	var value2 = a.find($("a")).find($(".jt")).attr("src") == "../images/index/sm4(5).jpg"?"rotate(0deg)":"rotate(180deg)";
	a.find($("a")).find($(".jt")).attr("src",value1).css("transform",value2)
	if(a.find($("ul")).is(":visible")){
		a.find($("ul")).hide(10);
		a[0] == $(".jt2")[0]?$("#tangle").hide(10):$("#tangle1").hide(10);
	}else{
		a[0] == $(".jt2")[0]?$("#tangle").show(300):$("#tangle1").show(100);
		a.find($("ul")).show(100);
	}
}
$(".lxs").hover(function(){
	$(".ydfc").stop(true,true)
	$(".ydfc").show(1000)
},function(){
	$(".ydfc").stop(true,true)
	$(".ydfc").hide(1000)
})
//搜索框的事件
search();
function search(){
	$("#ho").hover(function(){
		hoThing(200,10)
	},function(){
		hoThing(0,0)
	});
	$("#ho1").hover(function(){
		$('#topmenu .right li:nth-child(1) input').stop(true);
	},function(){
		hoThing(0,0);
	});
}
//获得焦点的时候把事件解绑
$("#ho1 input").focus(function(){
	$("#ho,#ho1").off('mouseenter').off("mouseleave");
});
//失去焦点时再把事件加回来
$("#ho1 input").blur(function(){
	search();
	hoThing(0,0)
})
function hoThing(w,o){
	$('#topmenu .right li:nth-child(1) input').stop(true);
	$('#topmenu .right li:nth-child(1) input').animate({width:w+"px",opacity:o},300)
}

//分菜单
//轮播图上面的菜单
$(".hh,.menufcd").hover(function(){
	$("#tangle3").css("display",'block');
	$("#tangle4").css("display",'block');
	$(".menufcd").css("display",'block');
},function(){
	$("#tangle3").css("display",'none');
	$("#tangle4").css("display",'none');
	$(".menufcd").css("display",'none');
})

//搜索框
$(".sea input").focus(function(){
	$(".searchcontent").css("display","block");
	$(this).css("border","1px solid #00B081")
})
$(".sea input").blur(function(){
	$(".searchcontent").css("display","none");
	$(this).css("border","none")
})
//footer部分的qq
$(".ftzr ul li").each(function(index,elem){
	
	$(this).hover(function(){
		
		$(".layer2").eq(index).css("display","block")
	},function(){
		$(".layer2").eq(index).css("display","none");
		
	})
})
$(".layer2").each(function(index,elem){
	var that = this;
	$(this).hover(function(){
		$(that).css("display","block");
		$(".ftzr ul li").eq(index).css("background-image","url(../images/index/fot2.png)")
	},function(){
		$(that).css("display","none");
		$(".ftzr ul li").eq(index).css("background-image","url(../images/index/fot1.png)")
	})
})
//底部广告
window.onload = function(){
	setTimeout(function(){
		$(".bottomadv").css('display','block');
	},2000);
	$(".close").click(function(){
		$(".bottomadv").css('display','none');
	})
}
//右侧边栏
$(".top1").click(function(){
	var top1 = document.body.scrollTop;
		var speed = top1/10;
		var timer = setInterval(function(){
			if(document.body.scrollTop <= 0){
				document.body.scrollTop = 0;
				clearInterval(timer);
			}else{
				document.body.scrollTop = document.body.scrollTop - speed;
			}
		},80)
})

window.onscroll = function(e){
	$(".lettop li").css("display",$("body").scrollTop() >= 400?"block":"none");
	if($("body").scrollTop() >= 600){
		$(".lettop>div").fadeIn(500)
	}else{
		$(".lettop>div").fadeOut(10)
	}
}
//置顶
$('.top1').click(function(){
	var speed = $("body").scrollTop()/10;
	var timer = setInterval(function(){
			if(document.body.scrollTop <= 0){
				document.body.scrollTop = 0;
				clearInterval(timer);
			}else{
				document.body.scrollTop = document.body.scrollTop - speed;
			}
		},100)
});
$.ajax({
	type:"get",
	url:"./cityWalkList.json",
	success:function(data){
//		console.log(data);
		shuju(data);
	}
});
function shuju(data){
	var bgcontent = $("#bgcontent")
	for(var p in data){
		var div = $("<div></div>").attr("class","wrapcontent").appendTo(bgcontent);
		var div1 = $("<div></div>").attr("class","img").appendTo(div);
		$("<img/>").attr("src",data[p].imgurl).appendTo(div1);
		var div2 = $("<div></div>").attr("class","imgcontent").appendTo(div);
		$("<span></span>").text(data[p].address).appendTo(div2);
		var div3 = $("<div></div>").attr("class","looknum").appendTo(div2);
		div3.html("<span>"+data[p].browseCount+"</span>次浏览<span>"+data[p].soldCount+"</span>件已售")
		var h2 = $("<h2></h2>").html('<a href="#">'+data[p].title+'</a>').appendTo(div2);
		var ul = $("<ul></ul>").appendTo(div2);
		for(var m in data[p].introduce){
			var li1 = $("<li></li>").html('<i><img src="../images/citywalk/xx.jpg"/></i>&nbsp;&nbsp;'+data[p].introduce[m]).appendTo(ul);
		}
		var div4 = $("<div></div>").html('<span class="line">'+data[p].oldPrice+'元</span><em>'+data[p].newPrice+'</em>元起').attr("class","prices").appendTo(div2);
		var div5 = $("<div></div>").html('<a href="#">立即预订</a>').attr('class',"yd").appendTo(div2);
	}
}




$.ajax({
	type:"get",
	url:"./menu.json",
	success:function(data){
		menudom(data);
	}
});
function menudom(data){
	//	轮播图上面的菜单
	var ulbox = $(".menufcd");//装下拉菜单的ul
	var hotmechild$ = $("#hotmechild");//装下拉菜单右侧栏的分菜单
	for(var p=0;p<data.length-2;p++){
		var c = Number(p)+1;
		var $li = $("<li></li>").appendTo(ulbox);
		(function(p){
				$li.hover(function(){
				$("#hotmechild>div").eq(p).css("display","block")
				$(this).children().eq(3).css("color",'#00b081');
				$("#tangle3").css("display",'block');
				$("#tangle4").css("display",'block');
			},function(){
				$("#hotmechild>div").eq(p).css("display","none");
				$(this).children().eq(3).css("color",'silver');
			})
		})(p);
		var p1 = $("<p></p>").appendTo($li);
		$("<img/>").attr("src","../images/index/w"+c+".jpg").appendTo(p1);
		var p2 = $("<p></p>");
		p2.text(data[p].title).appendTo($li);
		var p3 = $("<p></p>").appendTo($li);
		for(var i=0;i<data[p].mainCity.length-1;i++){
			$("<a href='#'></a>").text(data[p].mainCity[i]).appendTo(p3);
		};
		var p4 = $("<p>︿</p>").appendTo($li);
		//轮播图上面菜单相应的分菜单
		var num = data[p].moreCity.length
		if(num != 1){
			var div$ = $("<div></div>").attr("class","onediv").appendTo(hotmechild$);
			//右边的分菜单也有hover事件
			(function(p){
				div$.hover(function(){
					$(this).css("display","block");
					$(".menufcd").css("display",'block');
					$("#tangle3").css("display",'block');
				$("#tangle4").css("display",'block');
					$(".menufcd>li").eq(p).children().eq(3).css("color",'#00b081');
				},function(){
				$(this).css("display","none");
				$(".menufcd>li").eq(p).children().eq(3).css("color",'silver');
				$(".menufcd").css("display",'none');
				$("#tangle3").css("display",'none');
				$("#tangle4").css("display",'none');
				})
			})(p);
			
			var divleft$ = $("<div></div>").attr("class","menuall menu1").appendTo(div$);
			var ul1 = $("<ul></ul>").appendTo(divleft$);
			var divright$ = $("<div></div>").attr("class","menuall menu2").appendTo(div$);
			if(num == 3){
				var ul2 = $("<ul></ul>").appendTo(divleft$);
				var ul3 = $("<ul></ul>").appendTo(divright$);
			}else{
				var ul2 = $("<ul></ul>").appendTo(divright$);
			}
			for(var i=0;i<data[p].moreCity.length;i++){
				var data1 = data[p].moreCity[i];
				$("<h2></h2>").text(data1.cityName).appendTo(div$.children().find($("ul")).eq(i));
				for(j=0;j<data1.items.length;j++){
					$("<a href='#'></a>").text(data1.items[j]).appendTo(div$.children().find($("ul")).eq(i));
				}
			}
			
			var p1 = $("<p></p>").appendTo(divright$);
			var img1 = $("<img/>").appendTo(p1);
		}else{
			var div$ = $("<div></div>").attr("class","twodiv").appendTo(hotmechild$);
			var divleft$ = $("<div></div>").appendTo(div$);
			for(var i=0;i<data[p].moreCity.length;i++){
				var data1 = data[p].moreCity[i];
				$("<h2></h2>").text(data1.cityName).appendTo(divleft$);
				var ul1 = $("<ul></ul>").appendTo(divleft$);
				for(j=0;j<data1.items.length;j++){
					var $li = $("<li></li>").appendTo(ul1);
					var $a = $("<a href='#'></a>").appendTo($li);
					$("<img/>").attr("src",data1.items[j]).appendTo($a);
				};
			};
		};
		
		img1.attr("src",data[p].moreCityImg);
	}
};




//轮播图上面的菜单elem指的就是所在的li菜单行，
//function lb(elem){
//	var that = elem.index()+1;
////	更改下拉菜单中的小图标
//	var value = elem.children().eq(0).find($("img")).attr("src") == ("../images/index/w"+that+".jpg")?("../images/index/dh"+that+".jpg"):("../images/index/w"+that+".jpg");
//	elem.children().eq(0).find($("img")).attr("src",value);
////更改下拉菜单中的文字颜色
//	var value3 = elem.children().eq(1).css("color") == "rgb(255, 255, 255)"?"rgb(0, 0, 0)":"rgb(255, 255, 255)";
//	elem.children().eq(1).css("color",value3);
////更改下拉菜单的背景颜色
//	var value2 = elem.css("background-color") == "rgb(255, 255, 255)"?"transparent":"rgb(255, 255, 255)";
//	elem.css("background",value2);
////显示下拉菜单中的侧边菜单
//	var value1 = $("#hotmechild>div").eq(that-1).css("display") == "none"?"block":"none";
//	$("#hotmechild>div").eq(that-1).css("display",value1)
////更改下拉菜单中向右指向的箭头颜色
//	var value4 = elem.children().eq(3).css("color") == "rgb(192, 192, 192)"?"#00b081":"silver";
//	elem.children().eq(3).css("color",value4)
//};