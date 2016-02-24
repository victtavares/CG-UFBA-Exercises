 var scene;
 var renderer;
 var camera;
 var groupScene;
 var groupLetters;
 var letterA;
 var letterE;
 var letterI;
 var letterO;
 var letterU;
 var groupA;
 var groupE;
 var groupI;
 var groupU;

 var shouldStopCiranda = false;
 var shouldStopTrenzinho = false;
 var trenzinhoAnimationID;

function init() {

   scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(new THREE.Color(0.8, 0.8, 0.8));
  renderer.setSize(800, 800);
  
  camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
  scene.add( camera );

  //-------------------------------- Ajustando as letras no plano ---------------------------------
  var scaleValue  = 0.22;
  var YValue = 0;

  letterA = drawLetterA();
  letterA.scale.set(scaleValue,scaleValue,scaleValue);
  letterA.position.setX(-0.7);
  letterA.position.setY(0);
  rotateShapeOnAxis(0,-20,letterA);

  letterE = drawLetterE();
  letterE.scale.set(scaleValue,scaleValue,scaleValue);
  letterE.position.setX(-0.31);
  letterE.position.setY(0.0);
  rotateShapeOnAxis(0,-20,letterE);


  letterI = drawLetterI();
  letterI.scale.set(scaleValue,scaleValue,scaleValue);
  letterI.position.setX(-0.05);
  letterI.position.setY(YValue);
  rotateShapeOnAxis(0,-20,letterI);


  letterO = drawLetterO();
  letterO.scale.set(scaleValue,scaleValue,scaleValue);
  letterO.position.set(0.25, YValue, 0);
  rotateShapeOnAxis(0,-20,letterO);


  letterU = drawLetterU();
  letterU.scale.set(scaleValue,scaleValue,scaleValue);
  letterU.position.setX(0.7);
  letterU.position.setY(YValue);
  rotateShapeOnAxis(0,-20,letterU);



  var floor = drawFloor();
  groupA = new THREE.Object3D();
  groupA.add(letterA);

  groupE = new THREE.Object3D();
  groupE.add(letterE);

  groupI = new THREE.Object3D();
  groupI.add(letterI);

  groupO = new THREE.Object3D();
  groupO.add(letterO);

  groupU = new THREE.Object3D();
  groupU.add(letterU);

  groupE.add(letterE);
  groupLetters = new THREE.Object3D();
  groupLetters.add(groupA);
  groupLetters.add(groupE);
  groupLetters.add(groupI);
  groupLetters.add(groupO);
  groupLetters.add(groupU);

  groupLetters.scale.set(0.8,0.8,0.8);

  groupScene = new THREE.Object3D();
  groupScene.add(groupLetters);
  groupScene.add(floor);
  scene.add(groupScene);
  groupScene.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ).normalize(), Math.PI/6 );


  //-------------------------------- Adicionando as animações ---------------------------------
  animatedA();
  animatedE();
  animatedI();
  animatedO();
  animatedU();
  render();


  document.getElementById("WebGL-output").appendChild(renderer.domElement);
  renderer.clear();
  renderer.render(scene, camera);
}




//------------------------------- Animações  ------------------------------- 
//
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function animatedA() {
  var currentAngle = 0;
  var speed = 0.015;
    function animate() {
      currentAngle += speed;
      //Se o angulo for maior que 45 ou menor que -45, muda de lado
      if (currentAngle >= Math.PI/12 || currentAngle <= -Math.PI/12) {
          speed *=-1;
      }

      letterA.rotateOnAxis(new THREE.Vector3(0.0, 0.0, 1.0).normalize(), speed);
      requestAnimationFrame(animate);
    }

    animate();
}

function animatedE() {
  var currentAngle = 0;
  var speed = 0.015;

    function animate() {

      currentAngle += speed;
      //Se o angulo for maior que 45 ou menor que -45, muda de lado
      if (currentAngle >= Math.PI/6 || currentAngle <= -Math.PI/6) {
          speed *=-1;
      }

      letterE.rotateOnAxis(new THREE.Vector3(0.0, 1.0, 0.0).normalize(), speed);
      requestAnimationFrame(animate);
     
    }

    animate();
}

function animatedI() {
  var currentAngle = 0;
  var speed = 0.01;

    function animate() {

      currentAngle += speed;
      //Se o angulo for maior que 45 ou menor que -45, muda de lado
      if (currentAngle >= Math.PI/6 || currentAngle <= -Math.PI/6) {
          speed *=-1;
      }
      // helper = new THREE.AxisHelper( 1 );
      // letterI.add(helper);
      letterI.rotateOnAxis(new THREE.Vector3(1.0, 1.0, 0.0).normalize(), speed);
      requestAnimationFrame(animate);
     
    }

    animate();
}

function animatedO() {
  var currentPosition = 0;
  var speedPosition = 0.004;
  var speedAngle = 0.01;
  var currentAngle = 0;


    function animate() {

      currentPosition += speedPosition;
      currentAngle += speedAngle;

      //Se o angulo for maior que 45 ou menor que -45, muda de lado
      if (currentPosition >= 0.1 || currentPosition <= 0) {
          speedPosition *=-1;
      }

      if (currentAngle >= Math.PI/12 || currentAngle <= -Math.PI/12) {
          speedAngle *=-1;
      }

      
      letterO.rotateOnAxis(new THREE.Vector3(1.0, 0.0, 0.0).normalize(), speedAngle);
      letterO.translateY(speedPosition);
      requestAnimationFrame(animate);
     
    }

    animate();
}

function animatedU() {
  var currentPosition = 0;
  var speedPosition = 0.002;
  var speedAngle = 0.01;
  currentAngle = 0;

    function animate() {

      currentPosition += speedPosition;
      currentAngle += speedAngle;

      //Se o angulo for maior que 45 ou menor que -45, muda de lado
      if (currentPosition >= 0.05 || currentPosition <= -0.05) {
          speedPosition *=-1;
      }

      if (currentAngle >= Math.PI/6 || currentAngle <= -Math.PI/6) {
          speedAngle *=-1;
      }


      letterU.rotateOnAxis(new THREE.Vector3(0.0, 1.0, 0.0).normalize(), speedAngle);
      letterU.translateZ(speedPosition);
      requestAnimationFrame(animate);
     
    }

    animate();
}



function animateCiranda() {
    //letter A

    groupLetters.scale.setX(0.6);
    groupLetters.scale.setY(0.6);

    //Resetando as posições para que possamos realizar a curva por todo o eixo da cena.
    letterA.position.setX(0);
    letterE.position.setX(0);
    letterI.position.setX(0);
    letterO.position.setX(0);
    letterU.position.setX(0);

    animateLetterCiranda(groupA,0);
    animateLetterCiranda(groupE,-Math.PI/7);
    animateLetterCiranda(groupI,-Math.PI/4);
    animateLetterCiranda(groupO,-Math.PI/2.8);
    animateLetterCiranda(groupU,-Math.PI/1.8);

}


function animateLetterCiranda(group,startAngle) {
  shouldStopCiranda = false;
  var raio = 0.77;
  var speed = 0.01;
  function animate() {

    if (shouldStopCiranda) {
      return;
    }

    startAngle += speed;
    var x = raio*Math.cos(startAngle);
    var z = raio*Math.sin(startAngle);
    group.position.setX(x);
    group.position.setZ(z);
    requestAnimationFrame(animate);
  }

  animate();
}


function animateTrenzinho() {
  shouldStopCiranda = true;
  
  groupLetters.scale.setX(0.6);
  groupLetters.scale.setY(0.6);

  //Resetando as posições para que possamos realizar a curva por todo o eixo da cena.
  letterA.position.setX(0);
  letterE.position.setX(0);
  letterI.position.setX(0);
  letterO.position.setX(0);
  letterU.position.setX(0);


  var initialAposX = 0.9;

  groupA.position.setX(initialAposX);
  groupA.position.setZ(initialAposX);

  groupE.position.setX(initialAposX -0.4);
  groupE.position.setZ(initialAposX);

  groupI.position.setX(initialAposX -0.7);
  groupI.position.setZ(initialAposX);

  groupO.position.setX(initialAposX -1.0);
  groupO.position.setZ(initialAposX);

  groupU.position.setX(initialAposX -1.4);
  groupU.position.setZ(initialAposX);
  //var caminho = [{value:0.9, sentido:'x'}];

  walkSquare(groupA);
  walkSquare(groupE);
  walkSquare(groupI);
  walkSquare(groupO);
  walkSquare(groupU);
}


function round(number) {
  return Math.round(number * 10)/10;
}

function walkSquare(group) {
    var limitSquare = 0.9;
    var sentido = 'x';
    var speed = 0.01;


    function animate() {
      //Verifica se chegou no ponto inferior direito, caso seja verdade, subir pelo ponto Z
      if (group.position.x >= limitSquare && round(group.position.z) >= limitSquare && sentido == "x") {
        console.log("go down");
        speed *= -1;
         sentido = "z";
      }

      //Verifica se chegou no ponto superior, direito, caso seja verdade, ir para esquerda pelo ponto X
      if (group.position.x >= limitSquare && group.position.z <= -limitSquare && sentido == "z") {
        console.log("should go left");
        sentido = "x";
      }

      //Verifica se chegou no ponto superior esquerdo, caso seja verdade, ir para baixo pelo ponto Z
       if (group.position.x <= -limitSquare && round(group.position.z) <= -limitSquare && sentido == "x") {
        console.log("should go down");
        speed *= -1;
        sentido = "z";
      }

      //Verifica se chegou no ponto inferior esquerdo, caso seja verdade, ir para direita pelo ponto X
      if (round(group.position.x) <= -limitSquare && group.position.z >= limitSquare && sentido == "z") {
        console.log("should go right");
        sentido = "x";
      }

      if (sentido == 'x') {
        group.translateX(speed);
      }

      if (sentido == 'z') {
        group.translateZ(speed);
      }

      requestAnimationFrame(animate);

    }

    animate();


}
 
//------------------------------- Aux Functions ------------------------------- 

function clearScene() {
  var obj, i;
  for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
      obj = scene.children[ i ];
      if (obj !== camera) {
          scene.remove(obj);
      }
  }
}

function rotateShapeOnAxis(degreesX,degreesY, shape) {
  var rotationX = new THREE.Vector3( 1, 0, 0 ).normalize();
  var rotationY = new THREE.Vector3( 0, 1, 0 ).normalize();

  shape.rotateOnAxis( rotationX, (Math.PI * degreesX)/180 ); 
  shape.rotateOnAxis( rotationY, (Math.PI * degreesY)/180 ); 
}




//------------------------------- Desenhando as letras e o chão ------------------------------- 

function drawFloor() {
  var floorY = -0.2;
  var alturaFloor = 0.02;
  var vertice = 0.9;
  var geometry = new THREE.Geometry();

  //linha cima - frente
  geometry.vertices.push(new THREE.Vector3( -vertice, floorY, vertice )); //0
  geometry.vertices.push(new THREE.Vector3( vertice, floorY, vertice )); //1

  //linha cima - fundo
  geometry.vertices.push(new THREE.Vector3( -vertice, floorY, -vertice )); //2
  geometry.vertices.push(new THREE.Vector3( vertice, floorY, -vertice )); //3

  //linha baixo - frente
  geometry.vertices.push(new THREE.Vector3( -vertice, floorY-alturaFloor, vertice )); //4
  geometry.vertices.push(new THREE.Vector3( vertice, floorY-alturaFloor, vertice )); //5


  //linha baixo - fundo
  geometry.vertices.push(new THREE.Vector3( -vertice, floorY-alturaFloor, -vertice )); //6
  geometry.vertices.push(new THREE.Vector3( vertice, floorY-alturaFloor, -vertice )); //7

  geometry.faces.push(new THREE.Face3(0, 2, 1)); //0
  geometry.faces.push(new THREE.Face3(3, 1, 2)); //1

  geometry.faces.push(new THREE.Face3(4, 6, 5)); //2
  geometry.faces.push(new THREE.Face3(7, 5, 6)); //3

  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0xaa7070, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  });

  var currentShape = new THREE.Mesh(geometry,triangleMaterial);
  rotateShapeOnAxis(1,1,currentShape);
  //currentShape.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ).normalize(), Math.PI/2 ); 
  return currentShape;
}


function drawLetterA() {

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
  color:0x0080ff, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 

  var currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  
  return currentShape;
 


 }



function drawLetterE() {

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
  color:0xffff00, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 

  var currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  return currentShape;
}


function drawLetterI()  {

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
  color:0xff00ff, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 

  var currentShape = new THREE.Mesh(geometry,triangleMaterial);

  rotateShapeOnAxis(20,20,currentShape);

  return currentShape;

}


function drawLetterO() {

  var geometry = new THREE.Geometry();

  var numVertices = 60;
  var outsideRadius = 0.8;
  var insideRadius = 0.6;
  //Vertice
  // 0 ---- 60 -- front outside
  //61 ----- 121 --- front inside
  // 122 --- 182 --- back outside
  // 183 --- 244 --- back inside

  // front -- vertices
  //out circle
  for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
    var x1 = outsideRadius * Math.cos(i);
    var y1 = outsideRadius * Math.sin(i);

    geometry.vertices.push(new THREE.Vector3( x1, y1, 0.10)); 
  }
  //in circle
  for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
    var x2 = insideRadius * Math.cos(i);
    var y2 = insideRadius * Math.sin(i);

    geometry.vertices.push(new THREE.Vector3( x2, y2, 0.10)); 
  }

  //back -- vertices
  //out circle
  for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
    var x3 = outsideRadius * Math.cos(i);
    var y3 = outsideRadius * Math.sin(i);

    geometry.vertices.push(new THREE.Vector3( x3, y3, -0.10)); 
  }

  //in circle
  for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
    var x4 = insideRadius * Math.cos(i);
    var y4 = insideRadius * Math.sin(i);

    geometry.vertices.push(new THREE.Vector3( x4, y4, -0.10)); 
  }

  //Front -- faces
  //numVertices +1 is the beggining of the circle
  for (i = 0, inside = numVertices +1; i < numVertices ; i++, inside++) {
    //making the circle connecting the inside with the outside.
    geometry.faces.push(new THREE.Face3(inside, i, i+1));

    //completing the empty space to close the circle
    geometry.faces.push(new THREE.Face3(inside, i+1, inside+1));
  }

  //Back -- faces
  // i = 122, inside = 183, i < 182
  for (i = numVertices*2 + 2, inside = numVertices*3 +3; i < numVertices*3 +2; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i+1, inside+1));
  }


  //Connection - Outside
  for (i = 0, inside = numVertices*2 +2; i < numVertices; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside+1, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i, inside+1));
  }

  //Connection - Inside
  for (i = numVertices+1, inside = numVertices*3 +3; i < numVertices*2+1; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside+1, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i, inside+1));
  }

  //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x00ff00, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 


  var currentShape = new THREE.Mesh(geometry,triangleMaterial);
  rotateShapeOnAxis(20,20,currentShape);

  return currentShape;
}


  function drawLetterU() {

  var geometry = new THREE.Geometry();

  var numVertices = 60;
  var outsideRadius = -0.8;
  var insideRadius = -0.6;
  //Vertice
  // 0 ---- 60 -- front outside
  //61 ----- 121 --- front inside
  // 122 --- 182 --- back outside
  // 183 --- 244 --- back inside

  // front -- vertices
  //out circle
  for (i = 0 ; i < Math.PI ; i+= (Math.PI)/numVertices) {
    var x1 = outsideRadius * Math.cos(i);
    var y1 = outsideRadius * Math.sin(i);
    geometry.vertices.push(new THREE.Vector3( x1, y1, 0.10)); 
  }
  //in circle
  for (i = 0 ; i < Math.PI ; i+= (Math.PI)/numVertices) {
    var x2 = insideRadius * Math.cos(i);
    var y2 = insideRadius * Math.sin(i);
    geometry.vertices.push(new THREE.Vector3( x2, y2, 0.10)); 
  }

  //back -- vertices
  //out circle
  for (i = 0 ; i < Math.PI ; i+= (Math.PI)/numVertices) {
    var x3 = outsideRadius * Math.cos(i);
    var y3 = outsideRadius * Math.sin(i);
    geometry.vertices.push(new THREE.Vector3( x3, y3, -0.10)); 
  }

  //in circle
  for (i = 0 ; i < Math.PI ; i+= (Math.PI)/numVertices) {
    var x4 = insideRadius * Math.cos(i);
    var y4 = insideRadius * Math.sin(i);
    geometry.vertices.push(new THREE.Vector3( x4, y4, -0.10)); 
  }

  //Front -- faces
  for (i = 0, inside = numVertices +1; i < numVertices ; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i+1, inside+1));
  }

  //Back -- faces
  for (i = numVertices*2 + 2, inside = numVertices*3 +3; i < numVertices*3 +2; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i+1, inside+1));
  }

  //Connection - Outside
  for (i = 0, inside = numVertices*2 +2; i < numVertices; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside+1, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i, inside+1));
  }

  //Connection - Inside
  for (i = numVertices+1, inside = numVertices*3 +3; i < numVertices*2+1; i++, inside++) {
    geometry.faces.push(new THREE.Face3(inside+1, i, i+1));
    geometry.faces.push(new THREE.Face3(inside, i, inside+1));
  }

  var total = geometry.vertices.length;
  geometry.vertices.push(new THREE.Vector3( -0.8, 0.8, 0.10)); // total
  geometry.vertices.push(new THREE.Vector3( -0.6, 0.8, 0.10)); // total +1
  geometry.vertices.push(new THREE.Vector3(  0.6, 0.8, 0.10)); // total +2
  geometry.vertices.push(new THREE.Vector3(  0.8, 0.8, 0.10)); // total +3

  geometry.vertices.push(new THREE.Vector3( -0.8, 0.8, -0.10)); // total +4
  geometry.vertices.push(new THREE.Vector3( -0.6, 0.8, -0.10)); // total +5
  geometry.vertices.push(new THREE.Vector3(  0.6, 0.8, -0.10)); // total +6
  geometry.vertices.push(new THREE.Vector3(  0.8, 0.8, -0.10)); // total +7

   //Vertice
  // 0 ---- 60 -- front outside
  //61 ----- 121 --- front inside
  //122 --- 182 --- back outside
  //183 --- 243 --- back inside

  //left - front
  geometry.faces.push(new THREE.Face3(total, 0, numVertices+1));
  geometry.faces.push(new THREE.Face3(numVertices+1, total, total+1));


  //right- front
  geometry.faces.push(new THREE.Face3(total+2, numVertices, numVertices*2+1));
  geometry.faces.push(new THREE.Face3(total+3, total+2, numVertices));


  //left- back
  geometry.faces.push(new THREE.Face3(numVertices*3+3, numVertices*2+2, total+4));
  geometry.faces.push(new THREE.Face3(numVertices*3+3, total+5, total+4));

  //right- back
  geometry.faces.push(new THREE.Face3(numVertices*3+2, total+6, total+7));
  geometry.faces.push(new THREE.Face3(numVertices*4+3, numVertices*3+2, total+6));


  //top-right
  geometry.faces.push(new THREE.Face3(total, total+1, total+4));
  geometry.faces.push(new THREE.Face3(total+1, total+5, total+4));

  //top-left
  geometry.faces.push(new THREE.Face3(total+2, total+3, total+6));
  geometry.faces.push(new THREE.Face3(total+6, total+7, total+3));


  //left-side-outside
  geometry.faces.push(new THREE.Face3(total, 0, total+4));
  geometry.faces.push(new THREE.Face3(numVertices*2+2, 0, total+4));

  //left-side-inside
  geometry.faces.push(new THREE.Face3(total+1, numVertices+1, total+5));
  geometry.faces.push(new THREE.Face3(numVertices+1, numVertices*3+3, total+5));

  //right-side-inside
  geometry.faces.push(new THREE.Face3(numVertices*2+1, numVertices*4+3, total+6));
  geometry.faces.push(new THREE.Face3(numVertices*2+1, total+2, total+6));

  //right-side-outside
  geometry.faces.push(new THREE.Face3(numVertices*3+2, total+7, total+3));
  geometry.faces.push(new THREE.Face3(numVertices, numVertices*3+2, total+3));


   //Adding Element
  var triangleMaterial = new THREE.MeshBasicMaterial({ 
  color:0x0000FF, 
  vertexColors:THREE.VertexColors,
  side:THREE.DoubleSide,
  wireframe:false
  }); 


  var currentShape = new THREE.Mesh(geometry,triangleMaterial);
  rotateShapeOnAxis(20,20,currentShape);

  return currentShape; 
  }

  //Binding letters
  keyboardJS.bind('c', animateCiranda);
  keyboardJS.bind('t', animateTrenzinho);
  // keyboardJS.bind('a', drawLetterA);
  // keyboardJS.bind('e', drawLetterE);
  // keyboardJS.bind('i', drawLetterI);
  // keyboardJS.bind('o', drawLetterO);
  // keyboardJS.bind('u', drawLetterU);


