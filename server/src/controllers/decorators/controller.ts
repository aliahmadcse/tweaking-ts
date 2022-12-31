import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function Controller(routePrefix: string) {
  return function (target: Function) {
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method = Reflect.getMetadata('method', target.prototype, key);

      const routeHandler = target.prototype[key];
      if (path && method) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };

}
