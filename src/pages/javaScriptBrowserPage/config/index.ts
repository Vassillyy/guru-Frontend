import type { IConfig } from '@/entities/topic';
import { configDomNodes } from './configDomNodes';
import { configDomNavigation } from './configDomNavigation';
import { configSearchingElementsDom } from './configSearchingElementsDom';
import { configBasicDomNodeProperties } from './configBasicDomNodeProperties';
import { configAttributesAndProperties } from './configAttributesAndProperties';
import { configModifyingDocument } from './configModifyingDocument';
import { configStylesAndClasses } from './configStylesAndClasses';
import { configSizeAndScroll } from './configSizeAndScroll';
import { configSizeAndScrollWindow } from './configSizeAndScrollWindow';
import { configCoordinates } from './configCoordinates';

export const config: IConfig = [
  configDomNodes,
  configDomNavigation,
  configSearchingElementsDom,
  configBasicDomNodeProperties,
  configAttributesAndProperties,
  configModifyingDocument,
  configStylesAndClasses,
  configSizeAndScroll,
  configSizeAndScrollWindow,
  configCoordinates,
];
