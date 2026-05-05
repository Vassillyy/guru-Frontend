import type { IConfig } from '@/entities/topic';
import { configDomNodes } from './configDomNodes';
import { configDomNavigation } from './configDomNavigation';
import { configSearchingElementsDom } from './configSearchingElementsDom';

export const config: IConfig = [configDomNodes, configDomNavigation, configSearchingElementsDom];
