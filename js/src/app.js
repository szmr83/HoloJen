/**
 * Created by MuratCan on 18.9.2016.
 */
if (!Detector.webgl) Detector.addGetWebGLMessage();

var container;
var camera, scene, renderer, effect;
var stats;
var animator;
var logo;

init();
animate();

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    stats = new Stats();
    container.appendChild(stats.dom);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

    scene = new THREE.Scene();

    animator = new HOLO.Animator();

    logo = new Logo();
    logo.setCamera(camera);
    logo.addObjects(scene);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    effect = new HOLO.ThreeSidedDisplay(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    effect.setSize(window.innerWidth, window.innerHeight);
}

var seconds;
function animate() {
    seconds = new Date().getSeconds();
    if(seconds % 10 == 0){
        logo.flag = !logo.flag;
        logo.showClock(animator);
    }
    animator.animate();
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function render() {
    effect.render(scene, camera);
}