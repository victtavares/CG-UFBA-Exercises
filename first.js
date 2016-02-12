 var scene;
 var renderer;
 var camera;
 var geometry;

function init() {

   scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(new THREE.Color(1.0, 1.0, 1.0));
  renderer.setSize(500, 500);
  
  camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
  scene.add( camera );

  geometry = new THREE.Geometry();
}


$(document).keypress(function(e){

  console.log(e.which);
    switch (e.which) {
        case 97, 65:
            drawLetterA();
            break;
        case 101, 69:
            drawLetterE();
            break;
        case 105, 73:
            drawLetterI();
            break;
        case 111, 79:
            drawLetterO();
            break;
        case 117, 85:
            drawLetterU();
            break;
    }      
});


function addGeometry(geometry) {
  var line = new THREE.Line(geometry);
  scene.add(line);  

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
  geometry.vertices.push(new THREE.Vector3( 0.32, -0.3, 0.10 )); //9
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.1, 0.10 )); //10
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.1, 0.10 )); //11
  geometry.vertices.push(new THREE.Vector3( -0.32, -0.3, 0.10 )); //12

  geometry.vertices.push(new THREE.Vector3( -0.8, -0.8, -0.10 )); //13
  geometry.vertices.push(new THREE.Vector3( -0.5, -0.8, -0.10 )); //14
  geometry.vertices.push(new THREE.Vector3( -0.3, 0.6, -0.10 )); //15
  geometry.vertices.push(new THREE.Vector3( 0, 0.6, -0.10 )); //16
  geometry.vertices.push(new THREE.Vector3( -0.2, 0.8, -0.10 )); //17
  geometry.vertices.push(new THREE.Vector3( 0.2, 0.8, -0.10 )); //18
  geometry.vertices.push(new THREE.Vector3( 0.3, 0.6, -0.10 )); //19
  geometry.vertices.push(new THREE.Vector3( 0.8, -0.8, -0.10 )); //20
  geometry.vertices.push(new THREE.Vector3( 0.5, -0.8, -0.10 )); //21
  geometry.vertices.push(new THREE.Vector3( 0.32, -0.3, -0.10 )); //22
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.1, -0.10 )); //23
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.1, -0.10 )); //24
  geometry.vertices.push(new THREE.Vector3( -0.32, -0.3, -0.10 )); //25

   //Front
   geometry.faces.push(new THREE.Face3(1, 0, 2));
   geometry.faces.push(new THREE.Face3(1, 2, 3));
   geometry.faces.push(new THREE.Face3(2, 4, 6));
   geometry.faces.push(new THREE.Face3(4, 5, 6));
   geometry.faces.push(new THREE.Face3(6, 7, 8));
   geometry.faces.push(new THREE.Face3(3, 6, 8));
   geometry.faces.push(new THREE.Face3(9, 10, 11));
   geometry.faces.push(new THREE.Face3(9, 10, 12));

   //back
   geometry.faces.push(new THREE.Face3(13, 14, 15));
   geometry.faces.push(new THREE.Face3(14, 15, 16));
   geometry.faces.push(new THREE.Face3(15, 17, 18));
   geometry.faces.push(new THREE.Face3(17, 18, 19));
   geometry.faces.push(new THREE.Face3(19, 20, 21));
   geometry.faces.push(new THREE.Face3(16, 19, 21));
   geometry.faces.push(new THREE.Face3(22, 23, 24));
   geometry.faces.push(new THREE.Face3(22, 23, 25));



   //Adding Element
   var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x000000, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:true
  }); 

  var triangleMesh = new THREE.Mesh(geometry,triangleMaterial); 

  triangleMesh.rotation.x = 0.3;
  triangleMesh.rotation.y = 0.3;
  scene.add( triangleMesh );
          
  document.getElementById("WebGL-output").appendChild(renderer.domElement);
        renderer.clear();
  renderer.render(scene, camera);
   // addGeometry(geometry);
  // addGeometry(complementGeometry);

 }

function drawLetterE() {
  clearScene();

  var geometry = new THREE.Geometry();

  geometry.vertices.push(new THREE.Vector3( -0.25, -0.78, 0.0 )); // bottom left - 1
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.78, 0.0 ));  // bottom right - 2
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.5, 0.0 )); // bottom right - 3
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.5, 0.0 )); //bottom left - 4
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.2, 0.0 )); //bottom left - 5
  geometry.vertices.push(new THREE.Vector3( 0.25, -0.2, 0.0 )); //bottom right - 6
  geometry.vertices.push(new THREE.Vector3( 0.25, 0.1, 0.0 )); // center right - 7
  geometry.vertices.push(new THREE.Vector3( -0.25, 0.1, 0.0 ));  // center left - 8
  geometry.vertices.push(new THREE.Vector3( -0.25, 0.4, 0.0 ));  // top left - 9
  geometry.vertices.push(new THREE.Vector3( 0.25, 0.4, 0.0 ));  // top right - 10
  geometry.vertices.push(new THREE.Vector3( 0.25, 0.7, 0.0 ));  // top right - 11
  geometry.vertices.push(new THREE.Vector3( -0.5, 0.7, 0.0 ));  // top left - 12
  geometry.vertices.push(new THREE.Vector3( -0.5, -0.78, 0.0 ));  // bottom left - 13
  geometry.vertices.push(new THREE.Vector3( -0.25, -0.78, 0.0 )); // bottom left - 1
  addGeometry(geometry);
}


function drawLetterI()  {
  clearScene();

  var geometry = new THREE.Geometry();

  geometry.vertices.push(new THREE.Vector3( -0.10, -0.95, 0.0 )); //bottom left
  geometry.vertices.push(new THREE.Vector3( 0.10, -0.95, 0.0 ));  // bottom right
  geometry.vertices.push(new THREE.Vector3( 0.10, 0.95, 0.0 )); // top right
  geometry.vertices.push(new THREE.Vector3( -0.10, 0.95, 0.0 )); // top left
  geometry.vertices.push(new THREE.Vector3( -0.10, -0.95, 0.0 ));// bottom left
  addGeometry(geometry);

}


function drawLetterO() {
    clearScene();

    var geometry = new THREE.RingGeometry( 0.98, 0.78, 32, 30);
    var material = new THREE.MeshBasicMaterial( { color: 0x8585ad, side: THREE.DoubleSide } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    renderer.clear();
    renderer.render(scene, camera); 

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


