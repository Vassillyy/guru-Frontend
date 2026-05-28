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
import { configIntroductionBrowserEvents } from './configIntroductionBrowserEvents';
import { configBubblingAndCapturing } from './configBubblingAndCapturing';
import { configDefaultBrowserAction } from './configDefaultBrowserAction';
import { configDispatchEvents } from './configDispatchEvents';
import { configMouseEventsBasics } from './configMouseEventsBasics';
import { configPointerEvents } from './configPointerEvents';
import { configKeyboardEvents } from './configKeyboardEvents';
import { configFormElements } from './configFormElements';
import { configFocusBlur } from './configFocusBlur';
import { configScroll } from './configScroll';

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
  configIntroductionBrowserEvents,
  configBubblingAndCapturing,
  configDefaultBrowserAction,
  configDispatchEvents,
  configMouseEventsBasics,
  configKeyboardEvents,
  configPointerEvents,
  configScroll,
  configFormElements,
  configFocusBlur,
];
