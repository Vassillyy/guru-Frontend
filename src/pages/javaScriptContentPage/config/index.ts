import { Topics, type IConfig } from '@/entities/topic';
import { configBasic } from './basic';
import { configObject } from './object';

export const config: IConfig = {
  [Topics.BASIC]: configBasic,
  [Topics.OBJECT]: configObject,
};
