


//document.write("<p> RayTracer Window:</p>");
var rt_Window = document.getElementById("rayTracerWindow"),  width = 640 * 0.5,  height = 480 * 0.5;
rt_Window.width = width;
rt_Window.height = height;
rt_Window.innerHTML="RayTracer";

var ctx = rt_Window.getContext("2d");
data = ctx.getImageData(0, 0, width, height);

var scene = {};
scene.camera = {
    point: {
      x: 0,
      y: 1.8,
      z: 10,
    },
    fieldOfView: 45,
    vector: {
      x: 0,
      y: 3,
      z: 0,
    },
};
scene.lights = [
{
    x: -30,
    y: -10,
    z: 20,
},];
scene.objects = [
    {
      type: "sphere",
      point: {
        x: 0,
        y: 3.5,
        z: -3,
      },
      color: {
        x: 155,
        y: 200,
        z: 155,
      },
      specular: 0.2,
      lambert: 0.7,
      ambient: 0.1,
      radius: 3,
    },
    {
      type: "sphere",
      point: {
        x: -4,
        y: 2,
        z: -1,
      },
      color: {
        x: 155,
        y: 155,
        z: 155,
      },
      specular: 0.1,
      lambert: 0.9,
      ambient: 0.0,
      radius: 0.2,
    },
    {
      type: "sphere",
      point: {
        x: -4,
        y: 3,
        z: -1,
      },
      color: {
        x: 255,
        y: 255,
        z: 255,
      },
      specular: 0.2,
      lambert: 0.7,
      ambient: 0.1,
      radius: 0.1,
    },
  ];


function render(scene) {
    var camera = scene.camera,
    objects = scene.objects,
    lights = scene.lights;
    var eyeVector = Vector.unitVector(
        Vector.subtract(camera.vector, camera.point)
      ),vpRight = Vector.unitVector(Vector.crossProduct(eyeVector, Vector.UP)),
      vpUp = Vector.unitVector(Vector.crossProduct(vpRight, eyeVector)),fovRadians = (Math.PI * (camera.fieldOfView / 2)) / 180,
      heightWidthRatio = height / width,
      halfWidth = Math.tan(fovRadians),
      halfHeight = heightWidthRatio * halfWidth,
      camerawidth = halfWidth * 2,
      cameraheight = halfHeight * 2,
      pixelWidth = camerawidth / (width - 1),
      pixelHeight = cameraheight / (height - 1);
    
    var index, color;
    var ray = {
      point: camera.point,
    };
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var xcomp = Vector.scale(vpRight, x * pixelWidth - halfWidth),
        ycomp = Vector.scale(vpUp, y * pixelHeight - halfHeight);
      
        ray.vector = Vector.unitVector(Vector.add3(eyeVector, xcomp, ycomp));
        color = trace(ray, scene, 0);
        (index = x * 4 + y * width * 4), (data.data[index + 0] = color.x);
        data.data[index + 1] = color.y;
        data.data[index + 2] = color.z;
        data.data[index + 3] = 255;
      }
    }
    ctx.putImageData(data, 0, 0);
}

function trace(ray, scene, depth) {
    if (depth > 3) return;

    var distObject = intersectScene(ray, scene);
    if (distObject[0] === Infinity) {
        return Vector.WHITE;
      }
      
    var dist = distObject[0],  object = distObject[1];
    var pointAtTime = Vector.add(ray.point, Vector.scale(ray.vector, dist));

    return surface(
      ray,
      scene,
      object,
      pointAtTime,
      sphereNormal(object, pointAtTime),
      depth
    );
}

function intersectScene(ray, scene) {
    var closest = [Infinity, null];
    for (var i = 0; i < scene.objects.length; i++) {
        var object = scene.objects[i],
          dist = sphereIntersection(object, ray);
        if (dist !== undefined && dist < closest[0]) {
          closest = [dist, object];
        }
      }
    return closest;
}

function sphereIntersection(sphere, ray) {
    var eye_to_center = Vector.subtract(sphere.point, ray.point),
    v = Vector.dotProduct(eye_to_center, ray.vector),eoDot = Vector.dotProduct(eye_to_center, eye_to_center),
    discriminant = sphere.radius * sphere.radius - eoDot + v * v;

    if (discriminant < 0) {
        return;
    } 
    else { 
          return v - Math.sqrt(discriminant);
    }
}
function sphereNormal(sphere, pos) {
    return Vector.unitVector(Vector.subtract(pos, sphere.point));
}
function surface(ray, scene, object, pointAtTime, normal, depth) {
    var b = object.color,
      c = Vector.ZERO,
      lambertAmount = 0;
      if (object.lambert) {
        for (var i = 0; i < scene.lights.length; i++) {
          var lightPoint = scene.lights[i];
          if (!isLightVisible(pointAtTime, scene, lightPoint)) continue;
          var contribution = Vector.dotProduct(
            Vector.unitVector(Vector.subtract(lightPoint, pointAtTime)),
            normal
          );
          if (contribution > 0) lambertAmount += contribution;
        }
      }

      if (object.specular) {
        var reflectedRay = {
            point: pointAtTime,
            vector: Vector.reflectThrough(ray.vector, normal),
          };
          var reflectedColor = trace(reflectedRay, scene, ++depth);
          if (reflectedColor) {
            c = Vector.add(c, Vector.scale(reflectedColor, object.specular));
          }
        }
    lambertAmount = Math.min(1, lambertAmount);
    return Vector.add3(
        c,
        Vector.scale(b, lambertAmount * object.lambert),
        Vector.scale(b, object.ambient)
        );
}
function isLightVisible(pt, scene, light) {
    var distObject = intersectScene(
      {
        point: pt,
        vector: Vector.unitVector(Vector.subtract(pt, light)),
      },
      scene
    );
    return distObject[0] > -0.005;
}

var planet1 = 0,  planet2 = 0;
function tick() {
    planet1 += 0.1;
    planet2 += 0.2;
    scene.objects[1].point.x = Math.sin(planet1) * 3.5;
    scene.objects[1].point.z = -3 + Math.cos(planet1) * 3.5;

    scene.objects[2].point.x = Math.sin(planet2) * 4;
    scene.objects[2].point.z = -3 + Math.cos(planet2) * 4;

    render(scene);

    if (playing) setTimeout(tick, 10);
}

var playing = false;

function toggle(e) {
  if (playing) {
    e.target.innerText = "Play";
    playing = false;
  } else {
    e.target.innerText = "Pause";
    playing = true;
    tick();
  }
}

render(scene);
document.getElementById("play").onclick = toggle;


function writeParagraph(text) {
    document.write("<p>"+text+ "RayTracer App Here</p>");
}


function raytracer_main()
{
}

