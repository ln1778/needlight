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
	<div className='imgitem' style={{backgroundImage:"url('wenhua.jpg')"}}/>
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