import * as THREE from 'three';

export const setupTabula = (canvas: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  const scene = new THREE.Scene();

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 0x234567,
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.setRotationFromEuler(new THREE.Euler(.2, .6, 0.1));
  scene.add(cube);

  const render = () => {
    renderer.render(scene, camera);
  };

  const onResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const aspectRatio = window.innerWidth / window.innerHeight;
    const cameraHeight = camera.top - camera.bottom;
    const cameraWidth = aspectRatio * cameraHeight;
    camera.left = -cameraWidth / 2;
    camera.right = cameraWidth / 2;
    camera.updateProjectionMatrix();

    render();
  };

  window.addEventListener('resize', onResize);
  onResize();
};
