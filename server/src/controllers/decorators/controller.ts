import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';


function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

export function Controller(routePrefix: string = '') {
  return function (target: Function) {

    const router = AppRouter.getInstance();

    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];

      const routeHandler = target.prototype[key];
      if (path && method) {
        router[method](`${routePrefix}${path}`, ...middlewares, bodyValidators(requiredBodyProps), routeHandler);
      }
    }
  };

}
