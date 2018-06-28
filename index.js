window.onload=function(){
	let gouwuche=document.getElementsByClassName("gouwuche")[0];
	let gouwuxiala=document.getElementsByClassName("gouwuxiala")[0];
	gouwuche.onmouseenter=function(){
		gouwuxiala.style.height="98px";
		gouwuxiala.style.boxShadow="0 1px 2px 1px rgba(0,0,0,0.3)";

		
	}
	gouwuche.onmouseleave=function(){
		gouwuxiala.style.height="0";
		gouwuxiala.style.boxShadow="none";

	}
	let d=document.getElementsByClassName("cdange");
	let c=document.getElementsByClassName("cedaohang");
	console.log(c);
	for(let i=0;i<c.length;i++){
		d[i].onmouseenter=function(){
			for(let j=0;j<c.length;j++){
				c[j].style.display="none"
			}
			c[i].style.display="block"
		}
		d[i].onmouseleave=function(){
			c[i].style.display="none"
		}	
	}


	let a=document.getElementsByClassName("shangyou")[0];
	let b=a.getElementsByTagName("a");
	console.log(b);
	let e=document.getElementsByClassName("youkuan");
	console.log(e);
	e[0].style.display="block"
	for(let i=0;i<b.length;i++){
		b[i].onmouseenter=function(){
			for(let j=0;j<b.length;j++){
				e[j].style.display="none";
			}
			e[i].style.display="block"
		}
	}
	function zhi(zn){
		// let zhin=zn.getElementsByClassName("zhin")[0];
		let abq=zn.getElementsByClassName("abq")[0];
		let biaoqian=abq.getElementsByTagName("a");
		let zhineny=zn.getElementsByClassName("zhineny");
		console.log(abq,biaoqian,zhineny);
		zhineny[0].style.display=("block");
		for(let i=0;i<biaoqian.length;i++){
			biaoqian[i].onmouseenter=function(){
				for(let j=0;j<zhineny.length;j++){
					zhineny[j].style.display="none"
				}
					zhineny[i].style.display="block"

			}
				// biaoqian[i].onmouseleave=function(){
				// zhineny[i].style.display="none"
			// }
		}
	}
	let zhinen=document.getElementsByClassName("zhin")[0];
	let zhinen1=document.getElementsByClassName("zhin11")[0];
	zhi(zhinen);
	zhi(zhinen1);


	let zjctxl=document.getElementsByClassName("zjctxl");
	console.log(zjctxl);
	let zhong=document.getElementsByClassName("abiaoqian")[0];
	let aa=zhong.getElementsByTagName("a")
	console.log(zhong,aa);
	for(let i=0;i<aa.length;i++){
		aa[i].onmouseenter=function(){
			for(let j=0;j<zjctxl.length;j++){
				zjctxl[j].style.dispiay="none"
			}
			zjctxl[i].style.display="block"
		}
		aa[i].onmouseleave=function(){
			zjctxl[i].style.display="none"

		}
		// zjctxl[i].onmouseenter=function(){
		// 	zjctxl[i].style.display="block"
		// }
	}
	// 轮播图
	let lunbotu=document.querySelector(".lunbotu");
	let lunbo=document.querySelectorAll(".lunbo li");
	let lunbodian=document.querySelectorAll(".lunbodian li");
	let djyou=document.querySelector(".djyou");
	let djzuo=document.querySelector(".djzuo");
	// console.log(lunbotu,lunbo,lunbodian,djyou,djzuo);
	let changdu=parseInt(window.getComputedStyle(lunbotu,null).width);
	// console.log(changdu);
	let t=setInterval(move,2000);
	lunbodian[0].className="hot";
	// let flag=ture
	let naxt=0;
	let current=0;
	lunbotu.onmouseenter=function(){
		clearInterval(t);
	}
	lunbotu.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	djyou.onclick=function(){
		// if(naxt=-1){
		// 	naxt=lumbo.length-1;
		// }
		move()
	}
	djzuo.onclick=function(){
		
		movel()
	}
	function move(){
		naxt++;
		if(naxt==lunbo.length){
			naxt=0
		}
		lunbodian[current].classList.remove("hot");
		lunbodian[naxt].classList.add("hot");
		lunbo[naxt].style.left=changdu+"px";
		animate(lunbo[current],{left:-changdu});
		animate(lunbo[naxt],{left:0});
		current=naxt
	}
	function movel(){
		naxt--;
		if(naxt==-1){
			naxt=lunbo.length-1
		}
		lunbodian[current].classList.remove("hot");
		lunbodian[naxt].classList.add("hot");
		lunbo[naxt].style.left=-changdu+"px";
		animate(lunbo[current],{left:changdu});
		animate(lunbo[naxt],{left:0});
		current=naxt
	}
	
	// 小米单品
	let danpindi=document.querySelector(".danpindi");
	let djjiantou=document.querySelectorAll(".djjiantou");
	let pin=parseInt(window.getComputedStyle(danpindi,null).width)/3;	
	console.log(pin)
	let ji=0;
		djjiantou[0].onclick=function(){
			ji++;
			if(ji==3){
				ji=2
			}
			danpindi.style.transform=`translateX(${-pin*ji}px)`
		}
		djjiantou[1].onclick=function(){
			ji--;
			if(ji==-1){
				ji=0
			}
			danpindi.style.transform=`translateX(${-pin*ji}px)`

		}
// 双下标轮播
	let uld=document.querySelectorAll(".uld");
	let nrtp=document.querySelectorAll(".nrtp");
	let dianhezi1=document.querySelectorAll(".dianhezi1 li");
	let zuoyid=document.querySelectorAll(".zuoyid");
	let youyid=document.querySelectorAll(".youyid");
	let kuan=parseInt(window.getComputedStyle(uld,null).width);
	console.log(youyid,zuoyid,dianhezi1,nrtp,uld)












}