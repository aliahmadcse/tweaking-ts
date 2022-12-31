import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';


function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}


export const Get = routeBinder(Methods.GET);
export const Post = routeBinder(Methods.POST);
export const Put = routeBinder(Methods.PUT);
export const Delete = routeBinder(Methods.DELETE);
export const Patch = routeBinder(Methods.PATCH);


