import * as THREE from "three";
import { gsap } from "gsap";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';



const Text=(scene,text,option,callback)=>{
    const fontloader = new FontLoader();
    fontloader.load(
        // 资源URL
        option.fontName?'fonts/'+option.fontName+'.json':'fonts/fz_hei.json',
    
        // onLoad回调
        function ( font ) {
            // do something with the font
            console.log( font );
            font.offsetX=1;
            let textGeo = new TextGeometry(text, {
                font: font,
                size:option.size?option.size:16,
                height:option.height?option.height:4,
                curveSegments:option.curveSegments?option.curveSegments:2,
                bevelThickness:option.bevelThickness?option.bevelThickness:1,
                bevelSize:option.bevelSize?option.bevelSize: 2,
                bevelEnabled:option.bevelEnabled?option.bevelEnabled: false
            } );
            console.log(textGeo,"textGeo");
            textGeo.computeBoundingBox();
            let materials = [
                new THREE.MeshPhongMaterial( { color:option.color?option.color: 0xffffff, flatShading: true } ), // front
                 new THREE.MeshPhongMaterial( { color:option.color?option.color: 0xffffff, } ) // side
            ];
            let material=new THREE.MeshBasicMaterial( { color: 0xffffff, flatShading: true } );
            let textMesh1 = new THREE.Mesh( textGeo, materials );
            scene.add(textMesh1);
            callback(textMesh1);
        },
    
        // onProgress回调
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
    
        // onError回调
        function ( err ) {
            console.log( 'An error happened',err );
        }
    );
}

export default Text;