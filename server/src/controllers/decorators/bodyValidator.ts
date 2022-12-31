import 'reflect-metadata';
import { MetadataKeys } from './models/MetadataKeys';

export function BodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
  };
}
