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
    <div className='imgitem' style={{backgroundImage:"url('3000187.jpg')"}}/>
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