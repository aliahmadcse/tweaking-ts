import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';


export function Use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];
    Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
  };
}

