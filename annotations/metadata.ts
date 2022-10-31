import 'reflect-metadata';


const plane = {
  color: 'red'
};


Reflect.defineMetadata('note', 'hi there', plane);


Reflect.defineMetadata('height', 10, plane);

console.log(plane);

console.log(Reflect.getMetadata('note', plane));
console.log(Reflect.getMetadata('height', plane));
