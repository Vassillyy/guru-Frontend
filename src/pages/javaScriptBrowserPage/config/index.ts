import type { IConfig } from '@/entities/topic';
import { configDomNodes } from './configDomNodes';
import { configDomNavigation } from './configDomNavigation';

export const config: IConfig = [configDomNodes, configDomNavigation];
