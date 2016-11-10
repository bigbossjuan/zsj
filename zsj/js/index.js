//头部的广告删除事件
$("#toper img").click(function(){
	$("#toper").css("display","none")
});
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
//小app
$("#red").hover(function(){
	$("#continue #red img").css("top", "10px");
},function(){
	$("#continue #red img").css("top", "15px")
})







$.ajax({
	type:"get",
	url:"http://10.3.157.188:8500/getBanner",
	success:function(data){
		rr(data);
	}
});
function rr(data){
	for(var i=0;i<data.length;i++){
		var li1 = $("<li></li>").appendTo($("#lbt>ul"));
		(function(index1){
			li1.click(function(){
				clearInterval(timer);
				setTimeout(start(data.length-1),1000);
				$("#lp").animate({"left":index1*(-1349)+"px"},500);
				$(this).attr("class","lbt");
				$(this).siblings().attr("class"," ");
			});
		})(i);
		var divlp = $("<div></div>").attr("id","tu").appendTo($("#lbt>#lp"));
		var lpa = $("<a></a>").css("background-image","url("+data[i].imgUrl+")").attr("href",data[i].href).appendTo(divlp);
		if(i==0){
			 li1.attr("class","lbt").appendTo($("#lbt>ul"));
		};
	};
	start(data.length-1);
	num = data.length-1;
};

//轮播图
var count =0;
function start(num){
	timer = setInterval(function(){
		count = $(".lbt").index();
		if(count==3){
			count=-1;
		}
		bij(count+1);
	var left =$("#lp").offset().left;
	lefta =left-1349;
	if(lefta <= -((num+1)*1349)){
		lefta = 0;
	}
	$("#lp").animate({"left":lefta+"px"},500);
},2000);
}
////点击左边
$("#lejt").click(function(){
	clearInterval(timer);
	count = $(".lbt").index();
	bij(count-1)
	if(count == 0){
		count=4;
	}
	setTimeout(start(num),1000)
	var left1 =$("#lp").offset().left;
	left2 =left1+1349;
	if(left1 >= 0){
		left2=-(num*1349);
	}
	$("#lp").animate({"left":left2+"px"},500);	
});
//点击右边
$("#rijt").click(function(){
	clearInterval(timer);
	count = $(".lbt").index();
	if(count==3){
		count=-1;
	}
	bij(count+1);
	setTimeout(start(num),1000)
	var left3 =$("#lp").offset().left;
	left4 =left3-1349;
	if(left4 <= -((num+1)*1349)){
		left4 = 0;
	}
	$("#lp").animate({"left":left4+"px"},500);
})
function bij(index){
	$("#lbt li").eq(index).attr("class","lbt");
	$("#lbt li").eq(index).siblings().attr("class"," ");
}







$.ajax({
	type:"get",
	url:"http://10.3.157.188:8500/getfreeWalk",
	success:function(data){
//		console.log(data);
		jjx(data);
	}
});
function jjx(data){
	var ul = $("<ul></ul>").appendTo($("#zyxwrap .topwz"));
	for(var p in data){
		var li = $("<li></li>").appendTo(ul);
		var div = $("<div></div>").appendTo($("#xscon"));
		var ul1 = $("<ul></ul>").appendTo(div);
		var a = $('<a href="#"></a>').text(data[p].title).appendTo(li);
		(function(p){
				li.hover(function(){
					$(this).find($(":first-child a")).css({"border-bottom":"none","color":"#636363"});
					$(".zyx #xscon>div").eq(p).siblings().css("display","none");
					$(".zyx #xscon>div").eq(p).css("display","block");
					$(this).find($('a')).css({"border-bottom":"3px solid #00b081","color":"#00b081"});
					$(this).siblings().find($("a")).css({"border-bottom":"none","color":"#636363"});
				})
			})(p);
		for(var m in data[p].data){
			console.log(data[p].data[m]);
			var obj = data[p].data[m]
			var li1 = $("<li></li>").appendTo(ul1);
				var p1 = $("<p></p>").attr("class","pic").appendTo(li1);
				$("<img/>").attr("src",obj.imgUrl).appendTo(p1);
				var infor = $("<div></div>").attr("class","infor").appendTo(li1);
				$("<span></span>").attr("class","jp").text("机+酒").appendTo(infor);
				$("<h3></h3>").attr("class","money").html(obj.price+"<span>元起</span>").appendTo(infor);
				var titles = $("<div></div>").attr("class","tiltes").appendTo(li1);
				$("<span></span>").text(obj.title).appendTo(titles);
				if(m==0){
					$("<p></p>").text(obj.time).attr("class","time").appendTo(titles);
				}
		}
		var li2 = $("<li></li>").attr("id","jgd").appendTo(ul1);
		var div2 = $("<div></div>").attr("class","top").appendTo(li2);
		$("<p></p>").html("查看更多<br/>机酒自由行产品").attr("class","ck").appendTo(div2);
		$("<p></p>").html('<img src="../images/index/gd.jpg"/>').attr("class","gd").appendTo(div2);
		var div3 = $("<div></div>").attr("class","bottom").appendTo(li2);
		$("<ul></ul>").html('<a href="#">机票</a>|<a href="#">酒店</a>|<a href="#">机+酒</a>|<a href="#">邮轮</a>').appendTo(div3);
	}
}














//搜索框
$("#searchmuch input").focus(function(){
	$(".searchcontent").css("display","block");
})
$("#searchmuch input").blur(function(){
	$(".searchcontent").css("display","none");
})

//换一换
$("#xm span").hover(function(){
	$(this).find($("img")).attr("src","../images/index/change2.jpg");
},function(){
	$(this).find($("img")).attr("src","../images/index/change1.jpg");
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
});

$(".zttj .topwz ul li,#cwl .topwz ul li").each(function(index,elem){
	var that = this;
	$(this).hover(function(){
		$(that).find($(":first-child a")).css({"border-bottom":"none","color":"#636363"});
		$(".zyx #xscon>div,.zttj #xscon>div,#cwl .clwcont>div").eq(index).siblings().css("display","none");
		$(".zyx #xscon>div,.zttj #xscon>div,#cwl  .clwcont>div").eq(index).css("display","block");
		$(that).find($('a')).css({"border-bottom":"3px solid #00b081","color":"#00b081"});
		$(that).siblings().find($("a")).css({"border-bottom":"none","color":"#636363"});
		
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

//热门类目
//轮播图上面的菜单
$.ajax({
	type:"get",
	url:"http://10.3.157.188:8500/getMenu",
	success:function(data){
		menudom(data);
	}
});
function menudom(data){
	//	轮播图上面的菜单
	var ulbox = $(".menubox");//装下拉菜单的ul
	var hotmechild$ = $("#hotmechild");//装下拉菜单右侧栏的分菜单
	for(var p in data){
		var c = Number(p)+1;
		var $li = $("<li></li>").appendTo(ulbox);
		$li.hover(function(){lb($(this))},function(){lb($(this))});
		var p1 = $("<p></p>").appendTo($li);
		$("<img/>").attr("src","../images/index/dh"+c+".jpg").appendTo(p1);
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
		//右边的分菜单也有hover事件
		div$.hover(function(){
			var elem = $("#hotmenu>ul>li").eq($(this).index());
			lb(elem);
		},function(){
			var elem = $("#hotmenu>ul>li").eq($(this).index());
			lb(elem)
		});
		img1.attr("src",data[p].moreCityImg);
	}
}
//轮播图上面的菜单elem指的就是所在的li菜单行，
function lb(elem){
	var that = elem.index()+1;
//	更改下拉菜单中的小图标
	var value = elem.children().eq(0).find($("img")).attr("src") == ("../images/index/w"+that+".jpg")?("../images/index/dh"+that+".jpg"):("../images/index/w"+that+".jpg");
	elem.children().eq(0).find($("img")).attr("src",value);
//更改下拉菜单中的文字颜色
	var value3 = elem.children().eq(1).css("color") == "rgb(255, 255, 255)"?"rgb(0, 0, 0)":"rgb(255, 255, 255)";
	elem.children().eq(1).css("color",value3);
//更改下拉菜单的背景颜色
	var value2 = elem.css("background-color") == "rgb(255, 255, 255)"?"transparent":"rgb(255, 255, 255)";
	elem.css("background",value2);
//显示下拉菜单中的侧边菜单
	var value1 = $("#hotmechild>div").eq(that-1).css("display") == "none"?"block":"none";
	$("#hotmechild>div").eq(that-1).css("display",value1)
//更改下拉菜单中向右指向的箭头颜色
	var value4 = elem.children().eq(3).css("color") == "rgb(192, 192, 192)"?"#00b081":"silver";
	elem.children().eq(3).css("color",value4)
};
