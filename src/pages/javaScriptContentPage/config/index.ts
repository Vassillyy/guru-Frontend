import { configCurrying } from './configCurrying.ts';
import { type IConfig } from '@/entities/topic';
import { configArrays } from './configArrays.ts';
import { configConditionalStatements } from './configConditionalStatements.ts';
import { configConstructor } from './configConstructor.ts';
import { configFunctions } from './configFunctions.ts';
import { configIntroductionToJS } from './configIntroductionToJS.ts';
import { configLoops } from './configLoops.ts';
import { configNumericSystems } from './configNumericSystems.ts';
import { configObjectBasics } from './configObjectBasics.ts';
import { configObjectMethods } from './configObjectMethods.ts';
import { configObjectToPrimitive } from './configObjectToPrimitive.ts';
import { configOperatorsAndSpecialValues } from './configOperatorsAndSpecialValues.ts';
import { configTypeConversion } from './configTypeConversion.ts';
import { configTypesOfData } from './configTypesOfData.ts';
import { configVariables } from './configVariables.ts';
import { configMapSet } from './configMapSet.ts';
import { configDestructuring } from './configDestructuring.ts';
import { configJSON } from './configJSON.ts';
import { configRecursion } from './configRecursion.ts';
import { configLinkedList } from './configLinkedList.ts';
import { configLexicalEnvironment } from './configLexicalEnvironment.ts';
import { configPropertyDescriptors } from './configPropertyDescriptors.ts';
import { configPrototypes } from './configPrototypes.ts';
import { configClasses } from './configClasses.ts';
import { configErrorHandling } from './configErrorHandling.ts';
import { configPromises } from './configPromises.ts';
import { configGenerators } from './configGenerators.ts';
import { configModulesIntro } from './configModulesIntro.ts';
import { configProxy } from './configProxy.ts';
import { configUnicode } from './configUnicode.ts';

export const config: IConfig = [
  configIntroductionToJS,
  configTypesOfData,
  configTypeConversion,
  configUnicode,
  configOperatorsAndSpecialValues,
  configVariables,
  configNumericSystems,
  configLoops,
  configConditionalStatements,
  configFunctions,
  configObjectBasics,
  configObjectMethods,
  configConstructor,
  configObjectToPrimitive,
  configArrays,
  configMapSet,
  configDestructuring,
  configJSON,
  configRecursion,
  configLinkedList,
  configLexicalEnvironment,
  configPropertyDescriptors,
  configPrototypes,
  configClasses,
  configErrorHandling,
  configPromises,
  configGenerators,
  configModulesIntro,
  configProxy,
  configCurrying,
];
