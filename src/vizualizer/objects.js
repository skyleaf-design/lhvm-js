var meshes = []
var magn = 1;
var steps = 8 * magn;
var loops = 4;
var size = 300
var h = size * 0.5;
var roz = .7;
var oldid = 1;
var points = [
  new THREE.Vector3(0, h, 0),
  //new THREE.Vector3(h * roz, 0, i * d - d * 2),
  new THREE.Vector3(h * roz, 0, 0),
  new THREE.Vector3(0, -h, 0),
  //new THREE.Vector3(0, -h, i * d - d * 2),
  new THREE.Vector3(-h * roz, 0, 0),
  //new THREE.Vector3(-h * roz, 0, i * d - d * 2),
  new THREE.Vector3(0, h, 0)
];



function cube(size) {

  var h = size * 0.5;
  var d = size * .2;

  var geometry = new THREE.Geometry();

  var max = 5;
  var roz = .7;
  var colors = []
  for (var i = 0; i < max; i++) {
    geometry.vertices.push(
        new THREE.Vector3(0, h, i * d - d * 2),
        new THREE.Vector3(h * roz, 0, i * d - d * 2),
        new THREE.Vector3(h * roz, 0, i * d - d * 2),
        new THREE.Vector3(0, -h, i * d - d * 2),
        new THREE.Vector3(0, -h, i * d - d * 2),
        new THREE.Vector3(-h * roz, 0, i * d - d * 2),
        new THREE.Vector3(-h * roz, 0, i * d - d * 2),
        new THREE.Vector3(0, h, i * d - d * 2)

        );
  }
  for (var j = 0; j < geometry.vertices.length; j++) {


    colors[ j ] = new THREE.Color(0xffffff);
    colors[ j ].setHSL(1, 1, .3 + 1 * j / geometry.vertices.length);
  }
  geometry.colors = colors;

  return geometry;

}

var needlesArray = [];
function needles() {
  var geometry = new THREE.CylinderGeometry(10, 0, 200, 4);
  geometry.applyMatrix((new THREE.Matrix4()).makeRotationX(-Math.PI / 2));
  
  // This must match the width and height of the heightmap.
  var max = 24;
  var roz = 100;
  for (var _z = 0; _z < max; _z++) {
    for (var _x = 0; _x < max; _x++) {
      var color = new THREE.Color(0xffffff);
      color.setHSL(_z / max, 1, .3 + 1 * _x / max);
      var material = new THREE.MeshBasicMaterial({color: color});
      var cube = new THREE.Mesh(geometry, material);
      var pos = new THREE.Vector3((-max / 2 + _x) * roz, 0, (-max / 2 + _z) * roz);
      cube.position.x = pos.x;
      cube.position.y = pos.y;
      cube.position.z = pos.z;
      needlesArray.push(cube)
      scene.add(cube);
    }
  }
}
var pos = new THREE.Vector3(0, 0, 0);

function updateNeedles(heightmap) {
  // Are our needles arranged by columns, offset by rows?
  for (var i = 0; i < needlesArray.length; i++) {
    var needle = needlesArray[i]
    needle.lookAt(pos)
    needle.position.y = heightmap[i] * 20;
  }
}

