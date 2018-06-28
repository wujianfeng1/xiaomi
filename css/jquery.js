$(function(){
	//购物车
	$(".gouwuche").mouseenter(function(){
		$(".gouwuxiala").slideDown()
	})
	$(".gouwuche").mouseleave(function(){
		$(".gouwuxiala").slideUp()
	})
	//测导航
	$(".cdange").children(".cedaohang").css({"display":"none"})
	$(".cdange").mouseenter(function(){
		$(".cedaohang").css({"display":"none"})
		$(this).children(".cedaohang").css({"display":"block"})
	})
	$(".cdange").mouseleave(function(){
		$(this).children(".cedaohang").css({"display":"none"})
	})
	// 选项卡家电
	$(".youkuan").eq(0).css({"display":"block"})
	let you=$(".shangyou a");
	you.mouseenter(function(){
		let index=$(this).index()
		$(".youkuan").css({"display":"none"})
		$(".youkuan").eq(index).css({"display":"block"})
	})
	// 选项卡智能2
	let son=$(".zhin11 .abq a");
	let ins=$(".zhin11 .zhineny")
	ins.eq(0).css({"display":"block"})
	console.log(son,ins)
	son.mouseenter(function(){
		let index=$(this).index()
		ins.css({"display":"none"});
		ins.eq(index).css({"display":"block"})
	})
	// 选项卡智能1
	let song=$(".zhina .zn a");
	let insg=$(".zhina .zhineny");
	insg.eq(0).css({"display":"block"})

	console.log(song,insg)
	song.mouseenter(function(){
		let index=$(this).index()
		
		insg.css({"display":"none"});
		insg.eq(index).css({"display":"block"})
	})
	


	// 轮播图上
	// 
	let t=setInterval(move,2000);
	let uls=$(".lunbotu")
	let imgs=$(".lunbo li");
	let lis=$(".lunbodian li");
	let flag=true;
	let z=$(".djzuo");
	let y=$(".djyou");
	
	let kuan=imgs.width();
	console.log(kuan)
	uls.mouseenter(function(){
		clearInterval(t)
	});
	uls.mouseleave(function(){
		t=setInterval(move,2000);
	});
	z.click(function(){
		if(flag==false){
			return;
		}
		// if(flag==0){
		// 	return
		// }
		flag=false
		movel()
	})
	y.click(function(){
		if(flag==false){
			return;
		}
		// if(flag==0){
		// 	return
		// }
		flag=false
		move()
	})
	let current=0;
	let next=0
	function move(){

		next++;
		if(next==imgs.length){
			next=0
		}
		lis.eq(current).removeClass("hot");
		lis.eq(next).addClass("hot");
		imgs.eq(next).css({"left":kuan+"px"})
		imgs.eq(current).animate({"left":-kuan+"px"});
		imgs.eq(next).animate({"left":0},function(){
			flag=true
		});
		current=next;
		// imgs.css({"z-index",5}).eq(index).css({"z-index",10});
		
	}
	function movel(){
		next--;
		if(next==-1){
			next=imgs.length-1
		}
		lis.eq(current).removeClass("hot");
		lis.eq(next).addClass("hot");
		imgs.eq(next).css({"left":-kuan+'px'})
		imgs.eq(current).animate({"left":kuan+'px'});
		imgs.eq(next).animate({"left":0},function(){
			flag=true
		});
		current=next;
	}
	// 小点点击	
	lis.each(function(index,v){
		$(v).click(function(){
			lis.eq(current).removeClass("hot");
			lis.eq(index).addClass("hot")

		if(index>current){
			imgs.eq(index).css({"left":kuan+'px'})
			imgs.eq(current).animate({"left":-kuan+'px'});
			imgs.eq(index).animate({"left":0});
		}
		else if(current>index){
			imgs.eq(index).css({"left":-kuan+'px'})
			imgs.eq(current).animate({"left":kuan+'px'});
			imgs.eq(index).animate({"left":0});
		}
		next=current=index;
	})

})


// 双下标轮播图
	
	
	
	$(".uld").each(function(i,v){
		
	let that=$(this);
	let list1=that.find(".nrtp");
	// console.log(list1)
	let lis2=that.find(".dianhezi1>li");
	let flags=true;
	let zuo1=that.find(".zuoyid");
	let you1=that.find(".youyid");
	let kuans=list1.width();
		console.log(kuans)
	let current1=0;
	let next1=0
	zuo1.click(function(){
		if(!flags){
			return;
		}
		if(next1==list1.length-1){
			next1=list1.length-1;
			return;
		}
		
		flags=false;
		move1()
	})
	you1.click(function(){
		if(!flags){
			return;
		}
		if(next1==0){
			next1=0;
			return;
		}
		flags=false;
		movel1()
	})
	
	function move1(){

		next1++;
		if(next1==lis2.length){
			next1=0
		}
		lis2.eq(current1).removeClass("dian1");
		lis2.eq(next1).addClass("dian1");
		list1.eq(next1).css({"left":kuans+"px"})
		list1.eq(current1).animate({"left":-kuans+"px"});
		list1.eq(next1).animate({"left":0},function(){
			flags=true
		});
		current1=next1;
		// imgs.css({"z-index",5}).eq(index).css({"z-index",10});
		
	}
	function movel1(){
		next1--;
		if(next1==-1){
			next1=lis2.length-1
		}
		lis2.eq(current1).removeClass("dian1");
		lis2.eq(next1).addClass("dian1");
		list1.eq(next1).css({"left":-kuans+'px'})
		list1.eq(current1).animate({"left":kuans+'px'});
		list1.eq(next1).animate({"left":0},function(){
			flags=true
		});
		current1=next1;
	}
	// 小点点击	
	lis2.each(function(index,v){
		$(v).click(function(){
			lis2.eq(current1).removeClass("dian1");
			lis2.eq(index).addClass("dian1")

		if(index>current1){
			list1.eq(index).css({"left":kuans+'px'})
			list1.eq(current1).animate({"left":-kuans+'px'});
			list1.eq(index).animate({"left":0});
		}
		else if(current1>index){
			list1.eq(index).css({"left":-kuans+'px'})
			list1.eq(current1).animate({"left":kuans+'px'});
			list1.eq(index).animate({"left":0});
		}
		current1=next1=index;
	})


	})

})





















})