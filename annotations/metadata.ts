import 'reflect-metadata';


// const plane = {
//   color: 'red'
// };


// Reflect.defineMetadata('note', 'hi there', plane);


// Reflect.defineMetadata('height', 10, plane);


// console.log(plane);

// console.log(Reflect.getMetadata('note', plane));
// console.log(Reflect.getMetadata('height', plane));

// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// console.log(Reflect.getMetadata('note', plane, 'color'));


@Controller
class Plane {
  color: string = 'green';

  @Get("/get/product/1")
  fly(): void {
    console.log("vrrr");
  }
}


function Get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
    // console.log(key);
  };
}


function Controller(target: typeof Plane) {
  console.log(target.prototype)

  for (let key of Object.getOwnPropertyNames(target.prototype)) {

    const secret = Reflect.getMetadata('path', Plane.prototype, key);
    console.log(Plane.prototype.fly);
    console.log(secret);
  }
}

