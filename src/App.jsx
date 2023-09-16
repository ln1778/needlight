import React,{ useState,useEffect } from 'react';
import './App.css';
import RightIcon from './assets/align-right.svg';
import Leftcon from './assets/toggle-left.svg';
import Home from "./Home.jsx";
import Chat from "./Chat.jsx";
import Wenhua from "./wenhua";
import Question from "./question";
import Contact from "./contact";


function App() {
  const [isPhone, setPhone] = useState(false);
  const [once] = useState(true);
  const [pathParam,setPathParam]=useState("home");


const isMobile=()=>{
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    )
  ) {
    /*window.location.href="你的手机版地址";*/
    setPhone(true);
  } else {
    /*window.location.href="你的电脑版地址";    */
    setPhone(false);
  }
}

useEffect(()=>{
  if(once){
    if(document.body.clientWidth<767){
      setPhone(true);
    }else{
      setPhone(false);
    }
  
    window.addEventListener('resize', onWindowResize );
  }
},[once]);



const onWindowResize=()=>{
  if(document.body.clientWidth<767){
    setPhone(true);
  }else{
    setPhone(false);
  }


}

const onNavTo=(path)=>{
 setPathParam(path);
 document.documentElement.scrollTop=0;
 let t=document.getElementById("offcanvas");
 t.setAttribute("class",'offcanvas offcanvas-start myoffcanvas');
 let c=document.getElementsByClassName("offcanvas-backdrop");
 if(c&&c.length){
  c[0].remove();
 }
 document.body.removeAttribute("style");
}

  return (
    <div className='appbox'>
   {isPhone?<nav className='navbox' >
   <a href="/" className='logobox' onClick={onNavTo.bind(null,"home")}>
   <img src="logo.jpg" className='logoimg'/>
   </a>
   <a data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvasExample" className='togglebtn'>
    <img src={RightIcon} style={{width:24,height:24}}/>
  </a>
 </nav>:<div className="pcnavcontainer">
 <a href="/" className='pclogobox'  onClick={onNavTo.bind(null,"home")}>
 <img src="logo.jpg" className='logoimg'/>
 <div className='title'>兆赞</div>
 <span className='china'>中国</span>
 </a>
 <nav className="navbar px-3 pcnavbox">
    <ul className="nav mainmenu">
      <a className={` ${pathParam=="home"&&"selected"}`}  onClick={onNavTo.bind(null,"home")}>首页</a>
      <a className={` ${pathParam=="what"&&"selected"}`} onClick={onNavTo.bind(null,"what")}>兆赞文化</a>
      <a className={` ${pathParam=="telect"&&"selected"}`}  onClick={onNavTo.bind(null,"telect")}>兆赞咨询</a>
      <a className={` ${pathParam=="careers"&&"selected"}`}  onClick={onNavTo.bind(null,"careers")}>ChatLight</a>
      <a className={` ${pathParam=="contact"&&"selected"}`} onClick={onNavTo.bind(null,"contact")}>联系我们</a>
    </ul>
  </nav>
  </div>}
  <section className='mainbox'>
  {pathParam=="home"?<Home isPhone={isPhone} />:null}
  {pathParam=="what"?<Wenhua isPhone={isPhone} />:null}
  {pathParam=="telect"?<Question isPhone={isPhone} />:null}
  {pathParam=="contact"?<Contact/>:null}
  {pathParam=="careers"?<Chat/>:null}
  </section>
  <div className="offcanvas offcanvas-start myoffcanvas" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body mobilemenuopen">
    <ul className='mainmenu'>
      <a onClick={onNavTo.bind(null,"home")} className={pathParam=="home"?"selected":""}>首页</a>
      <a onClick={onNavTo.bind(null,"what")} className={pathParam=="what"?"selected":""}>兆赞文化</a>
      <a onClick={onNavTo.bind(null,"telect")} className={pathParam=="telect"?"selected":""}>兆赞咨询</a>
      <a  onClick={onNavTo.bind(null,"careers")} className={pathParam=="careers"?"selected":""}>ChatLight</a>
      <a  onClick={onNavTo.bind(null,"contact")} className={pathParam=="contact"?"selected":""}>联系我们</a>
    </ul>
  </div>
</div>
<footer>
	 <p className={"icptext"}>copyright 2018 兆赞（上海）网络科技有限公司 版权所有</p>
	</footer>
    </div>
  )
}

export default App
