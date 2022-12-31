import 'reflect-metadata';

export function Get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
    Reflect.defineMetadata('method', 'get', target, key);
  };
}



