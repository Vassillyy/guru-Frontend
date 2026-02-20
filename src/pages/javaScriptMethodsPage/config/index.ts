import { configNumber } from './configNumber';
import { configString } from './configString';
import { configSymbol } from './configSymbol';
import { configObject } from './configObject';
import { configDate } from './configDate';
import { configFunction } from './configFunction';
import { configJSON } from './configJSON';
import { configMap } from './configMap';
import { configWeakMap } from './configWeakMap';
import { configSet } from './configSet';
import { configWeakSet } from './configWeakSet';
import { configUtil } from './configUtil';
import { configArray } from './configArray';
import { configReflect } from './configReflect.ts';
import { configPromise } from './configPromise';
import { configMath } from './configMath';
import { type TConfig } from '@/entities/method';

export const config: TConfig = {
  ...configNumber,
  ...configString,
  ...configSymbol,
  ...configArray,
  ...configObject,
  ...configDate,
  ...configFunction,
  ...configJSON,
  ...configPromise,
  ...configMap,
  ...configWeakMap,
  ...configSet,
  ...configWeakSet,
  ...configMath,
  ...configReflect,
  ...configUtil,
};
