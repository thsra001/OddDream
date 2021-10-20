// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();
// The camera
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
//skybox
const loader = new THREE.CubeTextureLoader();
const skyboss = loader.load( [
	'tex/box/px.png', 'tex/box/nx.png',
	'tex/box/py.png', 'tex/box/ny.png',
	'tex/box/pz.png', 'tex/box/nz.png'
] );
// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);
//loading textures
const texture = new THREE.TextureLoader().load( 'tex/carpet.jpg' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2,2)
//lighting
const ambient = new THREE.AmbientLight(0x898989)
const light = new THREE.HemisphereLight( 0x93d1f5, 0xa16508, 1 );
light.position.set(0,2,0)
// shapes to put on screen
const cube2 = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(0.2, 6, 18),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial ({ color:0x183F9F})
};
const cube = {};
const floor = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(6, 0.2, 18),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial ({ map: texture})
};
// The mesh: the geometry and material combined, to add to scene 
cube.mesh = new THREE.Mesh(cube2.geometry, cube2.material);
cube2.mesh = new THREE.Mesh(cube2.geometry, cube2.material);
floor.mesh = new THREE.Mesh(floor.geometry, floor.material);
// Add the cube into the scene
scene.add(cube.mesh);
scene.add(floor.mesh)
scene.add(cube2.mesh);
scene.add(light);
scene.background = skyboss
// positioning
cube.mesh.position.x=-3
cube2.mesh.position.z = cube.mesh.position.z = -6
cube2.mesh.position.x=3
floor.mesh.position.y=-3
floor.mesh.position.z=-6



//render loop for rendering scene and logic loop
function render() {
  // Render the scene and the camera
  renderer.render(scene, camera);

  // Rotate the cube every frame
  

  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();