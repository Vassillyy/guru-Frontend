import type { IConfig } from '@/entities/topic';
import { configDomNodes } from './configDomNodes';
import { configDomNavigation } from './configDomNavigation';
import { configSearchingElementsDom } from './configSearchingElementsDom';
import { configBasicDomNodeProperties } from './configBasicDomNodeProperties';
import { configAttributesAndProperties } from './configAttributesAndProperties';
import { configModifyingDocument } from './configModifyingDocument';

export const config: IConfig = [
  configDomNodes,
  configDomNavigation,
  configSearchingElementsDom,
  configBasicDomNodeProperties,
  configAttributesAndProperties,
  configModifyingDocument,
];
