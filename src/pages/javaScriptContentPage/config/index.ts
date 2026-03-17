import { Topics, type IConfig } from '@/entities/topic';
import { configBasic } from './basic';

export const config: IConfig = {
  [Topics.BASIC]: configBasic,
  [Topics.OBJECT]: [],
};
