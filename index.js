import * as THREE from "https://unpkg.com/three/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // aspect ratio
  0.01, // near
  2000 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(20, 0.7, 150, 3, 9, 11);
const material = new THREE.MeshBasicMaterial({
  color: 0x95a8db,
  wireframe: true,
});
const knot = new THREE.Mesh(geometry, material);
scene.add(knot);

camera.position.z = 100;

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.03;
  knot.rotation.y += 0.02;

  renderer.render(scene, camera);
}

animate();
