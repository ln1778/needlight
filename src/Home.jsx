import React, { useEffect,useMemo ,useState,useRef} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './scss/home.scss';
import * as THREE from "three";
import classnames from "classnames"
import { gsap } from "gsap";




function App({isPhone}) {
  const [once] = useState(true);
  const [page,setPage]= useState(1);
  const pages=useRef(null);



const scrollEndCall=(e)=>{
	let s = document.documentElement.scrollTop || document.body.scrollTop;
	      let itemheight=window.innerHeight-100;
		  let curpage=Math.floor(s/796);
		  let curheight=s%itemheight;
		  if(curpage<3){
			if(curheight<itemheight/2){
				document.documentElement.scrollTop=itemheight*(curpage);
			  }
			  if(curheight>itemheight/2){
				document.documentElement.scrollTop=itemheight*(curpage+1);
			  }
		  }
}
const scrollCall=(e)=>{
	let s = document.documentElement.scrollTop || document.body.scrollTop;
	if(document.body.clientWidth<767){
		let itemheight=window.innerHeight-100;
		let curpage=Math.floor(s/itemheight*2);
		  setPage(curpage+2);
	}else{
		let itemheight=window.innerHeight-100;
		let curpage=Math.floor(s/itemheight);
		setPage(curpage+1);
	}
}



useEffect(()=>{
	if(once){
		if(document.body.clientWidth<767){
			window.addEventListener("scroll",scrollCall);
		  }else{
			     window.addEventListener("scrollend",scrollEndCall);
				window.addEventListener("scroll",scrollCall);
		  }
	
	  return ()=>{
		  window.removeEventListener("scroll",scrollCall);
		  window.removeEventListener("scrollend",scrollEndCall);
	  }
	}
  },[once]);
  
  return (
	<div className='homebox' ref={pages} id="home">
	<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
	<div className="carousel-inner">
	  <div className="carousel-item active" >
	  <div className='carouselitem' style={{backgroundImage:"url('1.png')"}}>
	    <div className={classnames("fontbox")} >
		<Text className="font" defaultAnimate={page==1} direct={"right"}>
	    TO BE SPECIAL AI
	  </Text>
	  <Text className="font" defaultAnimate={page==1} direct={"right"}>让技术使我们成为特别</Text>
	  </div>
	  </div>
	  </div>
	  </div>
	</div>
	<div className='imgitem' style={{backgroundImage:"url('2.jpg')"}}>
	<div className="fontbox">
			<Text className="font" defaultAnimate={document.body.clientWidth<767?page==1:page==2} direct={"left"}>
			兆赞咨询板块
		</Text>
		<Text className="fontdesc" defaultAnimate={document.body.clientWidth<767?page==1:page==2} direct={"left"}>我们的APP-<a>ChatLight</a></Text>
		<Text className="fontdesc" defaultAnimate={document.body.clientWidth<767?page==1:page==2} direct={"left"}>运用互联网人工智能科技的力量</Text>
		<Text className="fontdesc" defaultAnimate={document.body.clientWidth<767?page==1:page==2} direct={"left"}>解答你的问题一切问题。</Text>
		</div>
	</div>
	<div className='imgitem' style={{backgroundImage:"url('3.jpg')"}}>
	<div className="fontbox third">
	<Text className="font" defaultAnimate={page==3} direct={"top"}>
	     影音传媒板块
		</Text>
		<Text className="fontdesc"  defaultAnimate={page==3} direct={"top"}>
		上海专业团队产品、服务企业宣传及摄制</Text>
		<Text className="fontdesc"  defaultAnimate={page==3} direct={"top"}>让互联网媒体的力量更加展现</Text>
	</div>
	</div>
	<div className={"contactbox"}>
	 <div  className="fontbox">
	 <Text className={"contacttitle"} defaultAnimate={page==4} direct={"bottom"}>Contact Us</Text>
	 <Text className={"contactinfo"}  defaultAnimate={page==4} direct={"bottom"}>地址：上海市普陀区金通路1118弄</Text>
	 </div>
	</div>
	</div>
  )
}


export default App


const Text=({children,style,className,defaultAnimate,direct})=>{
	const [once,setOnce]=useState(true);
	const [animated,setAnimated]=useState(false);

	useEffect(()=>{
		if(defaultAnimate){
			setAnimated(true);
		}
	},[defaultAnimate]);

  return (<p className={classnames(className,animated&&"animated",direct=="left"&&"animateleft",direct=="right"&&"animateright",direct=="top"&&"animatetop",direct=="bottom"&&"animatebottom")} style={style}>{children}</p>)
}