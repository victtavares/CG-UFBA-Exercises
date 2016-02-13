 var scene;
 var renderer;
 var camera;
 var currentShape;


function init() {

   scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(new THREE.Color(1.0, 1.0, 1.0));
  renderer.setSize(500, 500);
  
  camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
  scene.add( camera );
}


function addGeometry(geometry) {
  var line = new THREE.Line(geometry);
  scene.add(line);  

  document.getElementById("WebGL-output").appendChild(renderer.domElement);

  renderer.clear();
  renderer.render(scene, camera);
}


function addShape(shape) {
   scene.add( currentShape );      
   document.getElementById("WebGL-output").appendChild(renderer.domElement);
   renderer.clear();
   renderer.render(scene, camera);
}

function clearScene() {
  var obj, i;
  for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
      obj = scene.children[ i ];
      if (obj !== camera) {
          scene.remove(obj);
      }
  }
}

//if doesn't want to rotate, put 0 on value.
function rotateShapeOnAxis(degreesX,degreesY, shape) {
  var rotationX = new THREE.Vector3( 1, 0, 0 ).normalize();
  var rotationY = new THREE.Vector3( 0, 1, 0 ).normalize();

  currentShape.rotateOnAxis( rotationX, (Math.PI * degreesX)/180 ); 
  currentShape.rotateOnAxis( rotationY, (Math.PI * degreesY)/180 ); 
}

function drawLetterA() {
  clearScene();

  var geometry = new THREE.Geometry();

  geometry.vertices.push(new THREE.Vector3( -0.8, -0.8, 0.10 )); //0
  geometry.vertices.push(new THREE.Vector3( -0.5, -0.8, 0.10 )); //1
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.6, 0.10 )); //2
  geometry.vertices.push(new THREE.Vector3( 0, 0.6, 0.10 )); //3
  geometry.vertices.push(new THREE.Vector3( -0.2, 0.8, 0.10 )); //4
  geometry.vertices.push(new THREE.Vector3( 0.2, 0.8, 0.10 )); //5
  geometry.vertices.push(new THREE.Vector3( 0.3, 0.6, 0.10 )); //6
  geometry.vertices.push(new THREE.Vector3( 0.8, -0.8, 0.10 )); //7
  geometry.vertices.push(new THREE.Vector3( 0.5, -0.8, 0.10 )); //8
  geometry.vertices.push(new THREE.Vector3( 0.33, -0.3, 0.10 )); //9
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.1, 0.10 )); //10
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.1, 0.10 )); //11
  geometry.vertices.push(new THREE.Vector3( -0.33, -0.3, 0.10 )); //12



  geometry.vertices.push(new THREE.Vector3( -0.8, -0.8, -0.10 )); //13
  geometry.vertices.push(new THREE.Vector3( -0.5, -0.8, -0.10 )); //14
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.6, -0.10 )); //15
  geometry.vertices.push(new THREE.Vector3( 0, 0.6, -0.10 )); //16
  geometry.vertices.push(new THREE.Vector3( -0.2, 0.8, -0.10 )); //17
  geometry.vertices.push(new THREE.Vector3( 0.2, 0.8, -0.10 )); //18
  geometry.vertices.push(new THREE.Vector3( 0.3, 0.6, -0.10 )); //19
  geometry.vertices.push(new THREE.Vector3( 0.8, -0.8, -0.10 )); //20
  geometry.vertices.push(new THREE.Vector3( 0.5, -0.8, -0.10 )); //21
  geometry.vertices.push(new THREE.Vector3( 0.33, -0.3, -0.10 )); //22
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.1, -0.10 )); //23
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.1, -0.10 )); //24
  geometry.vertices.push(new THREE.Vector3( -0.33, -0.3, -0.10 )); //25

   //Front
   geometry.faces.push(new THREE.Face3(0, 1, 2)); //0
   geometry.faces.push(new THREE.Face3(1, 2, 3)); //1
   geometry.faces.push(new THREE.Face3(2, 4, 6)); //2
   geometry.faces.push(new THREE.Face3(4, 5, 6)); //3
   geometry.faces.push(new THREE.Face3(6, 7, 8)); //4
   geometry.faces.push(new THREE.Face3(3, 6, 8)); //5
   geometry.faces.push(new THREE.Face3(9, 10, 11)); //6
   geometry.faces.push(new THREE.Face3(9, 10, 12)); //7


   //back
   geometry.faces.push(new THREE.Face3(13, 14, 15)); //8
   geometry.faces.push(new THREE.Face3(14, 15, 16)); //9
   geometry.faces.push(new THREE.Face3(15, 17, 19)); //10
   geometry.faces.push(new THREE.Face3(17, 18, 19)); //11
   geometry.faces.push(new THREE.Face3(19, 20, 21)); //12
   geometry.faces.push(new THREE.Face3(16, 19, 21)); //13
   geometry.faces.push(new THREE.Face3(22, 23, 24)); //14 
   geometry.faces.push(new THREE.Face3(22, 23, 25)); //15

   //top
   geometry.faces.push(new THREE.Face3(4, 17, 5));
   geometry.faces.push(new THREE.Face3(5,17,18));

   //bottom-right
   geometry.faces.push(new THREE.Face3(8, 7, 20));
   geometry.faces.push(new THREE.Face3(8, 21, 20));

   //bottom-left
   geometry.faces.push(new THREE.Face3(0, 1, 14));
   geometry.faces.push(new THREE.Face3(0, 13, 14));

   //middle bottom
   geometry.faces.push(new THREE.Face3(9, 25, 12));
   geometry.faces.push(new THREE.Face3(25, 22, 9));

   //middle top
   geometry.faces.push(new THREE.Face3(10, 23, 11));
   geometry.faces.push(new THREE.Face3(23, 24, 11));

   //right -- inside - above middle
   geometry.faces.push(new THREE.Face3(10, 23, 16));
   geometry.faces.push(new THREE.Face3(3, 16, 10));

   //right -- inside -- below middle
   geometry.faces.push(new THREE.Face3(1, 14, 12));
   geometry.faces.push(new THREE.Face3(12, 25, 14));

   //left -- inside -- above middle
   geometry.faces.push(new THREE.Face3(11, 24, 16));
   geometry.faces.push(new THREE.Face3(3, 16, 11));

   //left -- inside -- below middle
   geometry.faces.push(new THREE.Face3(8, 9, 21));
   geometry.faces.push(new THREE.Face3(21, 22, 9));


   //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x8585ad, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 

  currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  addShape(currentShape);


 }



function drawLetterE() {
  clearScene();

  var geometry = new THREE.Geometry();
  
  geometry.vertices.push(new THREE.Vector3( -0.6, -0.8, 0.10 )); //0
  geometry.vertices.push(new THREE.Vector3(  0.5, -0.8, 0.10 )); //1
  geometry.vertices.push(new THREE.Vector3(  0.5, -0.48, 0.10 )); //2
  geometry.vertices.push(new THREE.Vector3( -0.3, -0.48, 0.10 ));//3
  geometry.vertices.push(new THREE.Vector3( -0.3, -0.16, 0.10 ));//4
  geometry.vertices.push(new THREE.Vector3( 0.42, -0.16, 0.10 ));//5
  geometry.vertices.push(new THREE.Vector3( 0.42, 0.16, 0.10 ));//6
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.16, 0.10 ));//7
  geometry.vertices.push(new THREE.Vector3( -0.6, 0, 0.10 ));//8
  geometry.vertices.push(new THREE.Vector3( -0.6, 0.8, 0.10 ));//9
  geometry.vertices.push(new THREE.Vector3( 0.5, 0.8, 0.10 ));//10
  geometry.vertices.push(new THREE.Vector3( 0.5, 0.48, 0.10 ));//11
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.48, 0.10 ));//12

  geometry.vertices.push(new THREE.Vector3( -0.6, -0.8, -0.10)); //13
  geometry.vertices.push(new THREE.Vector3(  0.5, -0.8, -0.10)); //14
  geometry.vertices.push(new THREE.Vector3(  0.5, -0.48, -0.10)); //15
  geometry.vertices.push(new THREE.Vector3( -0.3, -0.48, -0.10));//16
  geometry.vertices.push(new THREE.Vector3( -0.3, -0.16, -0.10));//17
  geometry.vertices.push(new THREE.Vector3( 0.42, -0.16, -0.10));//18
  geometry.vertices.push(new THREE.Vector3( 0.42, 0.16, -0.10));//19
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.16, -0.10));//20
  geometry.vertices.push(new THREE.Vector3( -0.6, 0, -0.10));//21
  geometry.vertices.push(new THREE.Vector3( -0.6, 0.8, -0.10));//22
  geometry.vertices.push(new THREE.Vector3( 0.5, 0.8, -0.10));//23
  geometry.vertices.push(new THREE.Vector3( 0.5, 0.48, -0.10));//24
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.48, -0.10));//25

  //Front
  geometry.faces.push(new THREE.Face3(0, 1, 3)); //0
  geometry.faces.push(new THREE.Face3(1, 2, 3)); //1
  geometry.faces.push(new THREE.Face3(0, 3, 8)); //2
  geometry.faces.push(new THREE.Face3(3, 8, 7)); //3
  geometry.faces.push(new THREE.Face3(4, 6, 7)); //4
  geometry.faces.push(new THREE.Face3(4, 6, 5)); //5
  geometry.faces.push(new THREE.Face3(8, 7, 9)); //6
  geometry.faces.push(new THREE.Face3(7, 12, 9)); //7
  geometry.faces.push(new THREE.Face3(9, 12, 10)); //8
  geometry.faces.push(new THREE.Face3(10, 11, 12)); //9


  //back
  geometry.faces.push(new THREE.Face3(13, 14, 16)); //10
  geometry.faces.push(new THREE.Face3(14, 15, 16)); //11
  geometry.faces.push(new THREE.Face3(13, 16, 21)); //12
  geometry.faces.push(new THREE.Face3(16, 21, 20)); //13
  geometry.faces.push(new THREE.Face3(17, 19, 20)); //14
  geometry.faces.push(new THREE.Face3(17, 19, 18)); //15
  geometry.faces.push(new THREE.Face3(21, 20, 22)); //16
  geometry.faces.push(new THREE.Face3(20, 25, 22)); //17
  geometry.faces.push(new THREE.Face3(22, 25, 23)); //18
  geometry.faces.push(new THREE.Face3(23, 24, 25)); //19


  //bottom
  geometry.faces.push(new THREE.Face3(0, 13, 1)); //20
  geometry.faces.push(new THREE.Face3(1, 13, 14)); //21

  //bottom-top
  geometry.faces.push(new THREE.Face3(2, 15, 3)); //22
  geometry.faces.push(new THREE.Face3(3, 16, 15)); //23

  //middle-bottom
  geometry.faces.push(new THREE.Face3(5, 18, 4)); //24
  geometry.faces.push(new THREE.Face3(4, 17, 18)); //25

  //middle-top
  geometry.faces.push(new THREE.Face3(7, 20, 19)); //26
  geometry.faces.push(new THREE.Face3(6, 19, 7)); //27


  //top-bottom
  geometry.faces.push(new THREE.Face3(11, 24, 12)); //28
  geometry.faces.push(new THREE.Face3(12, 25, 24)); //29

  //top
  geometry.faces.push(new THREE.Face3(10, 23, 9)); //30
  geometry.faces.push(new THREE.Face3(9, 22, 23)); //31

  //left-inside
  geometry.faces.push(new THREE.Face3(3, 16, 12)); //32
  geometry.faces.push(new THREE.Face3(12, 25, 16)); //33

  //left-outside
  geometry.faces.push(new THREE.Face3(0, 13, 9)); //33
  geometry.faces.push(new THREE.Face3(9, 22, 13)); //34



   //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x8585ad, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 
  console.log(geometry);
  currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  addShape(currentShape);
}


function drawLetterI()  {
  clearScene();

  var geometry = new THREE.Geometry();


  geometry.vertices.push(new THREE.Vector3( -0.10, -0.8, 0.10 )); //0
  geometry.vertices.push(new THREE.Vector3( 0.10, -0.8, 0.10 ));  //1
  geometry.vertices.push(new THREE.Vector3( 0.10, 0.8, 0.10 )); //2
  geometry.vertices.push(new THREE.Vector3( -0.10, 0.8, 0.10 )); //3

    geometry.vertices.push(new THREE.Vector3( -0.10, -0.8, -0.10 )); //4
  geometry.vertices.push(new THREE.Vector3( 0.10, -0.8, -0.10 ));  //5
  geometry.vertices.push(new THREE.Vector3( 0.10, 0.8, -0.10 )); //6
  geometry.vertices.push(new THREE.Vector3( -0.10, 0.8, -0.10 )); //7


  //front
  geometry.faces.push(new THREE.Face3(0, 1, 3)); //33
  geometry.faces.push(new THREE.Face3(1, 2, 3)); //34

  //back
  geometry.faces.push(new THREE.Face3(4, 5, 7)); //33
  geometry.faces.push(new THREE.Face3(5, 6, 7)); //34

  //bottom
  geometry.faces.push(new THREE.Face3(0, 1, 5)); //35
  geometry.faces.push(new THREE.Face3(0, 4, 5)); //36

  //top
  geometry.faces.push(new THREE.Face3(3, 2, 7)); //37
  geometry.faces.push(new THREE.Face3(2, 6, 7)); //38

  //left
  geometry.faces.push(new THREE.Face3(0, 3, 4));//39
  geometry.faces.push(new THREE.Face3(3, 7, 4)); //40

  //right
  geometry.faces.push(new THREE.Face3(1, 2, 5));//41
  geometry.faces.push(new THREE.Face3(2, 5, 4)); //42


   //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x8585ad, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 
  console.log(geometry);
  currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  addShape(currentShape);


}


function drawLetterO() {
    clearScene();

     var geometry = new THREE.Geometry();


    //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x8585ad, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 
  console.log(geometry);
  currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  addShape(currentShape);


    // var geometry = new THREE.RingGeometry( 0.98, 0.78, 32, 30);
    // var material = new THREE.MeshBasicMaterial( { color: 0x8585ad, side: THREE.DoubleSide } );
    // var mesh = new THREE.Mesh( geometry, material );
    // scene.add( mesh );

    // document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // renderer.clear();
    // renderer.render(scene, camera); 

    // addGeometry(geometry);    
}


  function drawLetterU() {
    clearScene();

    var geometry = new THREE.Geometry();


      // var curve = new THREE.SplineCurve3([
      //   new THREE.Vector3( -0.3, 0, 0 ), 
      //   new THREE.Vector3( -0.2, -0.4, 0 ),
      //   new THREE.Vector3( 0, -0.5, 0 ), //  
      //   new THREE.Vector3( 0.2, -0.4, 0 ),
      //   new THREE.Vector3( 0.3, 0, 0 ),  
      //  ]);

          var curve = new THREE.SplineCurve3([
        new THREE.Vector3( -0.3, 0.5, 0 ), 
        new THREE.Vector3( -0.2, 0.1, 0 ),
        new THREE.Vector3( 0, 0, 0 ), //  
        new THREE.Vector3( 0.2, 0.1, 0 ),
        new THREE.Vector3( 0.3, 0.5, 0 ),  
       ]);



    geometry.vertices = curve.getPoints(50);

    geometry.vertices.push(new THREE.Vector3( 0.3, 0.99, 0.0 ));// 5
    geometry.vertices.push(new THREE.Vector3( 0.45, 0.99, 0.0 ));//6


    // geometry.vertices.push(new THREE.Vector3( 0.5, 0.99, 0.0 ));// 5
    // geometry.vertices.push(new THREE.Vector3( 0.65, 0.99, 0.0 ));//6


    var curve2 = new THREE.SplineCurve3([
      new THREE.Vector3( 0.45, 0.5, 0 ), 
      new THREE.Vector3( 0.35, 0.05, 0 ),
      new THREE.Vector3( 0, -0.2, 0 ),
      new THREE.Vector3( -0.35, 0.0, 0 ),
      new THREE.Vector3( -0.45, 0.5, 0 ),    
    ]);

    geometry.vertices.push.apply(geometry.vertices, curve2.getPoints(50));


    geometry.vertices.push(new THREE.Vector3( -0.45, 0.99, 0.0 ));
    geometry.vertices.push(new THREE.Vector3( -0.3, 0.99, 0.0 ));
    geometry.vertices.push(new THREE.Vector3( -0.3, 0.5, 0 ));// 5
    //geometry.vertices.push(new THREE.Vector3( -0.7, 0.99, 0.0 ));// 5
    // geometry.vertices.concat(curve2.getPoints(50));

    console.log(geometry.vertices.length);
    addGeometry(geometry);
    // Create the final Object3d to add to the scene
    // var ellipse = new THREE.Line( geometry, material );

    // scene.add( ellipse );
    // renderer.clear();
    // renderer.render(scene, camera); 



  }

  //Binding letters
  keyboardJS.bind('a', drawLetterA);
  keyboardJS.bind('e', drawLetterE);
  keyboardJS.bind('i', drawLetterI);
  keyboardJS.bind('o', drawLetterO);
  keyboardJS.bind('u', drawLetterU);


