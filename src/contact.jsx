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

  return (
	<div className='homebox' ref={pages} id="home">
	<div className={"contactbox"}>
	 <div  className="fontbox" style={{textAlign:"center"}}>
	 <Text className={"contacttitle"} defaultAnimate={true} direct={"bottom"}>联系我们</Text>
	 <Text defaultAnimate={true} direct={"bottom"} style={{fontSize:15,color:"#a9a9a9"}}>Contact Us</Text>
	 <Text className={"contactinfo"}  defaultAnimate={true} direct={"bottom"}>地址：上海市普陀区金通路1118弄</Text>
	 <Text className={"contactinfo"}  defaultAnimate={true} direct={"bottom"}>客服热线：400-646-0086</Text>
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