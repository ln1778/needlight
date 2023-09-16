import * as THREE from "three";
import { gsap } from "gsap";




const Stars=(scene)=>{
  for(let j=0;j<100;j++){
    const geometry = new THREE.BufferGeometry();
    // 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
    // 因为在两个三角面片里，这两个顶点都需要被用到。
 
    const geometry2 = new THREE.SphereGeometry(1, 32, 32 );
    // itemSize = 3 因为每个顶点都是一个三元组。
   geometry.setAttribute( 'position', geometry2.attributes.position );
        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        const starIn=new THREE.InstancedMesh(
         geometry,
           material,
          100
           );
       
        for(let i=0;i<100;i++){
           let x=Math.random()*1000-500;
           let y=Math.random()*1000-500;
           let z=Math.random()*1000-500;
          
           let matrit=new THREE.Matrix4();
           let size=Math.random()*100-8;
           matrit.makeScale(size,size,size);
           matrit.makeTranslation(x,y,z);
          // starIn.position.set(x,y,z);
           starIn.setMatrixAt(i,matrit);
       
        }
        gsap.to(starIn.position,{
            duration:Math.random()*10+2,
            z:-1000,
            ease:"linear",
            repeat:-1
         });
         scene.add(starIn);
  };

}

export default Stars;